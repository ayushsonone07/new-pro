'use server';

import path from 'path';
import fs from 'fs';

export async function getSongs(): Promise<string[]> {
  const uploadDir = path.join(process.cwd(), 'public/uploads');

  if (!fs.existsSync(uploadDir)) {
    return [];
  }

  return fs.readdirSync(uploadDir);
}
