import { processSheet } from './sheets';

export async function processMsgs() {
  const messages = await processSheet();
  for (const { message, number } of messages) {
    try {
      const res = await fetch('http://localhost:3000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, number }),
      });
      const result = await res.text();
      if (res.ok) {
        console.log(`✅ Mensaje enviado a ${number}:`, result);
      } else {
        console.error(`❌ Error enviando a ${number}:`, result);
      }
    } catch (err) {
      console.error(`Error enviando a ${number}:`, err);
    }
  }
}
