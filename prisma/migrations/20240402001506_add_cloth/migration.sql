-- CreateTable
CREATE TABLE "Cloth" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "imgCover" TEXT NOT NULL,
    "imgs" TEXT,
    "color" TEXT,
    "size" TEXT,
    "typeId" INTEGER NOT NULL,
    CONSTRAINT "Cloth_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
