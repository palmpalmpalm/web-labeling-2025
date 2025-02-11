/*
  Warnings:

  - Added the required column `answer` to the `data` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AnswerType" AS ENUM ('CHOICE', 'INPUT');

-- AlterTable
ALTER TABLE "data" ADD COLUMN     "answer" TEXT NOT NULL,
ADD COLUMN     "type" "AnswerType" NOT NULL DEFAULT 'CHOICE';
