import { google } from "googleapis";

export type DriveImage = {
    id: string;
    name: string;
    thumbnailLink: string;
    webContentLink?: string;
};

// CACHE di memory untuk 1 instance serverless
let cachedImages: DriveImage[] | null = null;
let cachedAt = 0;
const CACHE_TTL = 60 * 60 * 1000; // 1 jam

export async function getDriveImages(): Promise<DriveImage[]> {
    try {
        const now = Date.now();

        // Kalau cache masih fresh → pakai cache, TIDAK hit Google Drive
        if (cachedImages && now - cachedAt < CACHE_TTL) {
        return cachedImages;
        }

        const scopes = ["https://www.googleapis.com/auth/drive.readonly"];

        const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes,
        });

        const drive = google.drive({ version: "v3", auth });

        const response = await drive.files.list({
        q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`,
        fields: "files(id, name, thumbnailLink, webContentLink)",
        orderBy: "createdTime desc",
        pageSize: 50,
        });

        const files = response.data.files || [];

        const mapped: DriveImage[] = files.map((file) => ({
        id: file.id || "",
        name: file.name || "Tanpa Nama",
        thumbnailLink: file.thumbnailLink?.replace("=s220", "=s1000") || "",
        webContentLink: file.webContentLink || undefined,
        }));

        // SIMPAN ke cache
        cachedImages = mapped;
        cachedAt = now;

        return mapped;
    } catch (error) {
        console.error("Gagal mengambil data dari Google Drive:", error);
        return [];
    }
}
