/*
  Warnings:

  - You are about to alter the column `score` on the `highscores` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_highscores" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "score" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_highscores" ("id", "name", "score") SELECT "id", "name", "score" FROM "highscores";
DROP TABLE "highscores";
ALTER TABLE "new_highscores" RENAME TO "highscores";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
