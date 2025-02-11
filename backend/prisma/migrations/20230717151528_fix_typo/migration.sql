/*
  Warnings:

  - You are about to drop the column `is_labeled` on the `user_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_data" DROP COLUMN "is_labeled",
ADD COLUMN     "is_labelled" BOOLEAN NOT NULL DEFAULT false;
