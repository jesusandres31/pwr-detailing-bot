# Chat Bot

Telegram bot in Node.js + TypeScript that answers questions using Groq LLM.

## Requirements

- Node.js >= 18
- pnpm (or npm/yarn)
- Environment variables in a `.env` file at the project root:

## Installation

```sh
pnpm install
```

## Local run

```sh
pnpm start
# or
node dist/index.js
```

## Production deployment (VPC) with PM2

1. Install pm2 globally (if you don't have it):

   ```sh
   pnpm add -g pm2
   # or
   npm install -g pm2
   ```

2. Build the project:

   ```sh
   pnpm build
   # or
   tsc
   ```

3. Start the bot with pm2:

   ```sh
   pm2 start dist/index.js --name chat-bot
   ```

4. Useful pm2 commands:
   - List processes: `pm2 ls`
   - View logs: `pm2 logs chat-bot`
   - Restart: `pm2 restart chat-bot`
   - Stop: `pm2 stop chat-bot`
   - Delete: `pm2 delete chat-bot`
