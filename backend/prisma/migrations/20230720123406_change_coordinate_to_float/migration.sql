/*
  Warnings:

  - A unique constraint covering the columns `[user_id,data_id]` on the table `user_data` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "data" ALTER COLUMN "coordinate_x" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "coordinate_y" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "user_data_user_id_data_id_key" ON "user_data"("user_id", "data_id");
