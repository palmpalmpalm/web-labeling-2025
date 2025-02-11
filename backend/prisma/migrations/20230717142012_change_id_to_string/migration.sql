/*
  Warnings:

  - The primary key for the `data` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `data_set` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `user_labeled_data` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "data" DROP CONSTRAINT "data_data_set_id_fkey";

-- DropForeignKey
ALTER TABLE "user_labeled_data" DROP CONSTRAINT "user_labeled_data_labeled_data_id_fkey";

-- DropForeignKey
ALTER TABLE "user_labeled_data" DROP CONSTRAINT "user_labeled_data_user_id_fkey";

-- AlterTable
ALTER TABLE "data" DROP CONSTRAINT "data_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "data_set_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "data_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "data_id_seq";

-- AlterTable
ALTER TABLE "data_set" DROP CONSTRAINT "data_set_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "data_set_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "data_set_id_seq";

-- AlterTable
ALTER TABLE "user" DROP CONSTRAINT "user_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_id_seq";

-- AlterTable
ALTER TABLE "user_labeled_data" DROP CONSTRAINT "user_labeled_data_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "labeled_data_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "user_labeled_data_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "user_labeled_data_id_seq";

-- AddForeignKey
ALTER TABLE "user_labeled_data" ADD CONSTRAINT "user_labeled_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_labeled_data" ADD CONSTRAINT "user_labeled_data_labeled_data_id_fkey" FOREIGN KEY ("labeled_data_id") REFERENCES "data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data" ADD CONSTRAINT "data_data_set_id_fkey" FOREIGN KEY ("data_set_id") REFERENCES "data_set"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
