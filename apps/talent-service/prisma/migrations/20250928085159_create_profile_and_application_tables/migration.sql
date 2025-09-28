-- CreateEnum
CREATE TYPE "talent"."ApplicationStatus" AS ENUM ('PENDING', 'PROFILE_PASSED', 'INTERVIEWED', 'PASSED', 'FAILED');

-- CreateTable
CREATE TABLE "talent"."profile" (
    "id" SERIAL NOT NULL,
    "candidate_id" INTEGER NOT NULL,
    "skills" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "summary" TEXT,
    "experience" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "education" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "projects" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "socialLinks" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "talent"."application" (
    "id" SERIAL NOT NULL,
    "job_id" INTEGER NOT NULL,
    "candidate_id" INTEGER NOT NULL,
    "status" "talent"."ApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_candidate_id_key" ON "talent"."profile"("candidate_id");
