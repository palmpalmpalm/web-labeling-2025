/*
  Warnings:

  - You are about to drop the `user_data_answer` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `coordinate_x` on the `data` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `coordinate_y` on the `data` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "user_data_answer" DROP CONSTRAINT "user_data_answer_user_data_id_fkey";

-- AlterTable
ALTER TABLE "data" DROP COLUMN "coordinate_x",
ADD COLUMN     "coordinate_x" DOUBLE PRECISION NOT NULL,
DROP COLUMN "coordinate_y",
ADD COLUMN     "coordinate_y" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "user_data" ADD COLUMN     "answers" TEXT[];

-- DropTable
DROP TABLE "user_data_answer";
