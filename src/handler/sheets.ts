import { getSheetData } from '../lib/sheets';

export async function processSheet() {
  try {
    const data = await getSheetData('Sheet1!A1:C10');
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const todayStr = `${dd}/${mm}/${yyyy}`;

    const [header, ...rows] = data;
    const filteredRows = rows.filter((row) => row[0] === todayStr);

    const result: Message[] = filteredRows.map((row) => ({
      message: row[1],
      number: row[2],
    }));
    return result;
  } catch (err) {
    console.error('Error leyendo Google Sheets:', err);
    return null;
  }
}
