import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const images = await prisma.image.findMany();
  return NextResponse.json(images);
}
