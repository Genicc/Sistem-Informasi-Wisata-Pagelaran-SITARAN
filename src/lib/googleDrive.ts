import { google } from 'googleapis';

export type DriveImage = {
    id: string;
    name: string;
    thumbnailLink: string;
    webContentLink?: string;
};

export async function getDriveImages(): Promise<DriveImage[]> {
    try {
        // Definisi scope izin akses
        const scopes = ['https://www.googleapis.com/auth/drive.readonly'];

        // PERBAIKAN 1: Menggunakan GoogleAuth (Lebih stabil untuk Next.js & TypeScript baru)
        const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: scopes,
        });

        const drive = google.drive({ version: 'v3', auth });

        const response = await drive.files.list({
        q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents and mimeType contains 'image/' and trashed = false`,
        fields: 'files(id, name, thumbnailLink, webContentLink)',
        orderBy: 'createdTime desc',
        pageSize: 50,
        });

        const files = response.data.files || [];

        // PERBAIKAN 2: Memastikan tipe data tidak null
        return files.map((file) => ({
        id: file.id || '', // Jika id null, ganti string kosong
        name: file.name || 'Tanpa Nama', // Jika nama null, ganti default
        thumbnailLink: file.thumbnailLink?.replace('=s220', '=s1000') || '',
        // Google kadang mengembalikan null, kita ubah jadi undefined agar sesuai tipe data
        webContentLink: file.webContentLink || undefined, 
        }));

    } catch (error) {
        console.error('Gagal mengambil data dari Google Drive:', error);
        return [];
    }
}