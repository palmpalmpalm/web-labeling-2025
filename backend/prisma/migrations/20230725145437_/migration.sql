/*
  Warnings:

  - You are about to drop the column `answer` on the `user_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_data" DROP COLUMN "answer",
ADD COLUMN     "answers" TEXT[];
