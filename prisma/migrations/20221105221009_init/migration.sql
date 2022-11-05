-- CreateTable
CREATE TABLE "Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "shelter" TEXT NOT NULL,
    "breed" TEXT,
    "photo" TEXT NOT NULL,
    "vaccinated" BOOLEAN DEFAULT false,
    "neutered" BOOLEAN DEFAULT false,
    "adopted" BOOLEAN DEFAULT false
);
