/*
  Warnings:

  - You are about to drop the column `answers` on the `user_data` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_data" DROP COLUMN "answers";

-- CreateTable
CREATE TABLE "user_data_answer" (
    "id" TEXT NOT NULL,
    "user_data_id" TEXT NOT NULL,
    "answers" TEXT[],
    "coordinate_x" DOUBLE PRECISION NOT NULL,
    "coordinate_y" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_data_answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_data_answer" ADD CONSTRAINT "user_data_answer_user_data_id_fkey" FOREIGN KEY ("user_data_id") REFERENCES "user_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
