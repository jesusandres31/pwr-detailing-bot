import { google } from 'googleapis';
import fs from 'fs';
import { CREDENTIALS_PATH, SHEET_ID } from '~/conf';

export async function getSheetData(range: string) {
  if (!SHEET_ID) throw new Error('SHEET_ID not set in environment');
  if (!fs.existsSync(CREDENTIALS_PATH))
    throw new Error('Service account file not found');

  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range,
  });

  return res.data.values;
}
