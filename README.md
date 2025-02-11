# web-labeling

### Backend development

To start developing backend application run these following steps

1. Download Docker Desktop from [Download Docker Desktop Here](https://docs.docker.com/compose/install/)

2. Start database instance using docker compose

   ```bash
   docker compose up -d
   ```

   For closing docker-compose

   ```
   docker compose down
   ```

3. Make sure that you create `.env` file using `.env.example` template

4. Install all package

   ```
   pnpm install
   ```

5. Run prisma reset

   ```
   pnpm prisma migrate reset
   ```

6. Start Nestjs

   ```
   pnpm start:dev
   ```

### Frontend development

1. Make sure that you create `.env.local` file using `.env.local.example` template

2. Install all package
   ```
   pnpm install
   ```
3. Start Next
   ```
   pnpm dev
   ```
