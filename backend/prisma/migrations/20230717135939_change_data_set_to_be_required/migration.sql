/*
  Warnings:

  - Made the column `data_set_id` on table `data` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "data" DROP CONSTRAINT "data_data_set_id_fkey";

-- AlterTable
ALTER TABLE "data" ALTER COLUMN "data_set_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "data" ADD CONSTRAINT "data_data_set_id_fkey" FOREIGN KEY ("data_set_id") REFERENCES "data_set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
