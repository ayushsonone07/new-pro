// app/actions.ts
'use server';

import { writeFile } from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';

export async function uploadMusic(formData: FormData) {
  const file = formData.get('music') as File;

  if (!file || !file.name) {
    throw new Error('No file received');
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadPath = path.join(process.cwd(), 'public/uploads', file.name);

  await writeFile(uploadPath, buffer);

  // Optional: revalidate to show uploaded list (if needed)
  revalidatePath('/');

  return { success: true };
}
