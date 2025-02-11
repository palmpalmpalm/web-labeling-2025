/*
  Warnings:

  - You are about to drop the `user_labeled_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "user_labeled_data" DROP CONSTRAINT "user_labeled_data_labeled_data_id_fkey";

-- DropForeignKey
ALTER TABLE "user_labeled_data" DROP CONSTRAINT "user_labeled_data_user_id_fkey";

-- DropTable
DROP TABLE "user_labeled_data";

-- CreateTable
CREATE TABLE "user_data" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "data_id" TEXT NOT NULL,
    "is_labeled" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_data" ADD CONSTRAINT "user_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_data" ADD CONSTRAINT "user_data_data_id_fkey" FOREIGN KEY ("data_id") REFERENCES "data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
