-- CreateTable
CREATE TABLE "redeem_code" (
    "code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "redeem_code_pkey" PRIMARY KEY ("code")
);

-- AddForeignKey
ALTER TABLE "redeem_code" ADD CONSTRAINT "redeem_code_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
