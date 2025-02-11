/*
  Warnings:

  - You are about to drop the column `answer` on the `data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "data" DROP COLUMN "answer";

-- AlterTable
ALTER TABLE "user_data" ADD COLUMN     "answer" TEXT;
