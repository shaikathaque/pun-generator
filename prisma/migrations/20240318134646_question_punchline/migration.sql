/*
  Warnings:

  - You are about to drop the column `content` on the `Pun` table. All the data in the column will be lost.
  - Added the required column `punchline` to the `Pun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pun" RENAME COLUMN "content" TO punchline;
ALTER TABLE "Pun" ADD COLUMN "question" TEXT;
