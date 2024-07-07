-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "imgCover" TEXT NOT NULL,
    "catalogId" INTEGER NOT NULL,
    CONSTRAINT "Type_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Type" ("catalogId", "id", "imgCover", "title") SELECT "catalogId", "id", "imgCover", "title" FROM "Type";
DROP TABLE "Type";
ALTER TABLE "new_Type" RENAME TO "Type";
CREATE TABLE "new_Cloth" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "imgCover" TEXT NOT NULL,
    "imgs" TEXT,
    "color" TEXT,
    "size" TEXT,
    "typeId" INTEGER NOT NULL,
    CONSTRAINT "Cloth_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Cloth" ("color", "createdAt", "id", "imgCover", "imgs", "size", "title", "typeId") SELECT "color", "createdAt", "id", "imgCover", "imgs", "size", "title", "typeId" FROM "Cloth";
DROP TABLE "Cloth";
ALTER TABLE "new_Cloth" RENAME TO "Cloth";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
