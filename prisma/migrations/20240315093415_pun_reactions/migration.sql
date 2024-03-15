-- CreateEnum
CREATE TYPE "Reaction" AS ENUM ('LIKE', 'DISLIKE');

-- CreateTable
CREATE TABLE "PunReaction" (
    "reaction" "Reaction" NOT NULL,
    "userId" TEXT NOT NULL,
    "punId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "PunReaction_punId_userId_key" ON "PunReaction"("punId", "userId");

-- AddForeignKey
ALTER TABLE "PunReaction" ADD CONSTRAINT "PunReaction_punId_fkey" FOREIGN KEY ("punId") REFERENCES "Pun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
