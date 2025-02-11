/*
  Warnings:

  - A unique constraint covering the columns `[user_data_id,coordinate_x,coordinate_y]` on the table `user_data_answer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_data_answer_user_data_id_coordinate_x_coordinate_y_key" ON "user_data_answer"("user_data_id", "coordinate_x", "coordinate_y");
