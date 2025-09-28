-- CreateEnum
CREATE TYPE "talent"."JobStatus" AS ENUM ('ACTIVE', 'INACTIVE', 'CLOSED');

-- AlterTable
ALTER TABLE "talent"."job" ADD COLUMN     "status" "talent"."JobStatus" NOT NULL DEFAULT 'ACTIVE';
