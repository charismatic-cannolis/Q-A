-- CREATE DATABASE "QA"

-- USE "QA"

DROP TABLE IF EXISTS
  "questions", "answers", "photos";

CREATE TABLE "questions" (
  "question_id" SERIAL,
  "product_id" integer NOT NULL,
  "body" text NOT NULL,
  "date" date,
  "asker_name" text,
  "helpfulness" integer,
  "reported" bytea,
  PRIMARY KEY("question_id")
);

CREATE TABLE "answers" (
  "answer_id" SERIAL,
  "page" integer,
  "count" integer,
  "date" date,
  "body" text NOT NULL,
  "answerer_name" text NOT NULL,
  "helpfulness" integer,
  "id_questions" integer NOT NULL,
  PRIMARY KEY("answer_id")
);

CREATE TABLE "photos" (
  "photo_id" SERIAL,
  "photo_url" text,
  "id_answers" integer NOT NULL,
  PRIMARY KEY("photo_id")
);

ALTER TABLE "answers" ADD FOREIGN KEY ("id_questions") REFERENCES "questions" ("question_id");

ALTER TABLE "photos" ADD FOREIGN KEY ("id_answers") REFERENCES "answers" ("answer_id");
