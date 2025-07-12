import { createBot, createProvider, createFlow } from '@builderbot/bot';
import { MemoryDB as Database } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys';
import { PORT } from '~/conf';

export const startWppServer = async () => {
  const adapterFlow = createFlow([]);
  const adapterProvider = createProvider(Provider);
  const adapterDB = new Database();

  const { handleCtx, httpServer } = await createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  adapterProvider.server.post(
    '/api/messages',
    handleCtx(async (bot, req, res) => {
      const { number, message, urlMedia } = req.body;
      await bot.sendMessage(`+549${number}`, message, {
        media: urlMedia ?? null,
      });
      return res.end('sended');
    })
  );

  httpServer(+PORT);
};
