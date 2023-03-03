-- CreateTable
CREATE TABLE "todos_todo" (
    "id" BIGSERIAL NOT NULL,
    "subject" VARCHAR(100) NOT NULL,
    "details" VARCHAR(100) NOT NULL,

    CONSTRAINT "todos_todo_pkey" PRIMARY KEY ("id")
);

