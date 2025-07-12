import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const PORT = process.env.PORT ?? 3008;
export const SHEET_ID = process.env.SHEET_ID;
export const CREDENTIALS_PATH = path.resolve(
  __dirname,
  '../../private/serviceaccount.json'
);
