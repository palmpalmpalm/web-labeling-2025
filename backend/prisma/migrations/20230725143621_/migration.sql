/*
  Warnings:

  - The `coordinate_x` column on the `data` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `coordinate_y` column on the `data` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `answer` column on the `user_data` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "data" DROP COLUMN "coordinate_x",
ADD COLUMN     "coordinate_x" DOUBLE PRECISION[],
DROP COLUMN "coordinate_y",
ADD COLUMN     "coordinate_y" DOUBLE PRECISION[];

-- AlterTable
ALTER TABLE "user_data" DROP COLUMN "answer",
ADD COLUMN     "answer" TEXT[];
