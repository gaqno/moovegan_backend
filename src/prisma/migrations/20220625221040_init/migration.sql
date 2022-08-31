/*
  Warnings:

  - You are about to alter the column `content` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "content" SET DATA TYPE VARCHAR(255);

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "content" VARCHAR(255) NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);
