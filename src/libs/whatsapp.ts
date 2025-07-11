import {
  createBot,
  createFlow,
  MemoryDB,
  createProvider,
  addKeyword,
} from '@bot-whatsapp/bot';
import { BaileysProvider } from '@bot-whatsapp/provider-baileys';

const firstFlow = addKeyword('hola').addAnswer(
  '¡Hola! ¿Cómo puedo ayudarte hoy?',
);

export const startWhatsAppBot = async () => {
  await createBot({
    flow: createFlow([firstFlow]),
    database: new MemoryDB(),
    provider: createProvider(BaileysProvider),
  });
  console.log('🤖 Bot de WhatsApp iniciado.');
};
