/*
  Warnings:

  - Added the required column `title` to the `TodoList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TodoList" ADD COLUMN     "title" TEXT NOT NULL;
