// File: app/api/form/route.ts

import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzRz9FQ9FZalU0u3pzEvs6kP3ArPOV_kjN29WxKQUmrPo5jT2F7gQdF8JWjR4ylg2xRRQ/exec';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validasi data
    if (!body.Nama_Lengkap_Instansi || !body.Email || !body.Nomor_WA) {
      return NextResponse.json(
        { success: false, message: 'Data tidak lengkap' },
        { status: 400 }
      );
    }

    // Forward request ke Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      redirect: 'follow', // Penting untuk GAS
    });

    const data = await response.json();
    
    // LOG UNTUK DEBUGGING (Cek console server kamu saat submit)
    console.log("Response dari Google Script:", data);

    // PERBAIKAN LOGIKA PENGECEKAN DI SINI:
    // Kita anggap sukses jika:
    // 1. data.success === true (format standar)
    // 2. ATAU data.result === 'success' (format umum GAS)
    // 3. ATAU pesan mengandung kata "berhasil" (fallback terakhir)
    const isSuccess = 
      data.success === true || 
      data.result === 'success' || 
      (data.message && typeof data.message === 'string' && data.message.toLowerCase().includes("berhasil"));

    if (!response.ok || !isSuccess) {
      throw new Error(data.message || 'Gagal menyimpan data ke Google Sheets');
    }

    return NextResponse.json({
      success: true,
      message: 'Data berhasil dikirim',
    });

  } catch (error) {
    console.error('Error in /api/form:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Terjadi kesalahan server',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'API endpoint is working',
    timestamp: new Date().toISOString(),
  });
}