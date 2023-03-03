-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "subject" VARCHAR(100) NOT NULL,
    "details" VARCHAR(100) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

