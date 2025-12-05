import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch('https://api.thecatapi.com/v1/breeds');
    const data = await response.json();
    return NextResponse.json(data);
}
