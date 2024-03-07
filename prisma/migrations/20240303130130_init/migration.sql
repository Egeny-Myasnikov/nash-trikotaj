-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Catalog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "imgCover" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Catalog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cloth" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "imgCover" TEXT NOT NULL,
    "catalogId" INTEGER,
    CONSTRAINT "Cloth_catalogId_fkey" FOREIGN KEY ("catalogId") REFERENCES "Catalog" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Model" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "imgCover" TEXT NOT NULL,
    "clothId" INTEGER,
    CONSTRAINT "Model_clothId_fkey" FOREIGN KEY ("clothId") REFERENCES "Cloth" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Size" (
    "size" TEXT NOT NULL,
    "modelId" INTEGER,
    CONSTRAINT "Size_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Color" (
    "color" TEXT NOT NULL,
    "modelId" INTEGER,
    CONSTRAINT "Color_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Size_size_key" ON "Size"("size");

-- CreateIndex
CREATE UNIQUE INDEX "Color_color_key" ON "Color"("color");
