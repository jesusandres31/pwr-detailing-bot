import { startWppServer } from './lib/whatsapp';
import { processMsgs } from './handler/whatsapp';

export async function startBotApp() {
  await startWppServer();
  await processMsgs();
}
