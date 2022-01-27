-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "Full_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_Full_name_key" ON "user"("Full_name");
