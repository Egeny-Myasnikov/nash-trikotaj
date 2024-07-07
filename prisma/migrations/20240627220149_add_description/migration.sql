-- AlterTable
ALTER TABLE "Catalog" ADD COLUMN "description" TEXT;
ALTER TABLE "Catalog" ADD COLUMN "descriptionSEO" TEXT;

-- AlterTable
ALTER TABLE "Cloth" ADD COLUMN "description" TEXT;
ALTER TABLE "Cloth" ADD COLUMN "descriptionSEO" TEXT;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN "description" TEXT;
ALTER TABLE "Type" ADD COLUMN "descriptionSEO" TEXT;
ALTER TABLE "Type" ADD COLUMN "icon" TEXT;
