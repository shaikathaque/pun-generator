/*
  Warnings:

  - Added the required column `userId` to the `Pun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pun" ADD COLUMN     "userId" TEXT NOT NULL;
