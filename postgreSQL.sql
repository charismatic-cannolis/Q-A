-- CREATE DATABASE "QA"

-- USE "QA"

DROP TABLE IF EXISTS
  "questions", "answers", "photos";

CREATE TABLE "questions" (
  "id" SERIAL,
  "product_id" INTEGER NOT NULL,
  "body" TEXT NOT NULL,
  "date_written" BIGINT,
  "asker_name" TEXT,
  "asker_email" TEXT,
  "helpful" SMALLINT DEFAULT 0,
  "reported" BOOLEAN DEFAULT false,
  PRIMARY KEY("id")
);

CREATE TABLE "answers" (
  "id" SERIAL,
  "question_id" integer NOT NULL,
  "body" text NOT NULL,
  "date_written" BIGINT,
  "answerer_name" text NOT NULL,
  "answerer_email" text NOT NULL,
  "helpful" SMALLINT DEFAULT 0,
  "reported" BOOLEAN DEFAULT false,
  PRIMARY KEY("id")
);

CREATE TABLE "photos" (
  "id" SERIAL,
  "answer_id" integer NOT NULL,
  "url" varchar(2048),
  PRIMARY KEY("id")
);


ALTER TABLE "answers" ADD FOREIGN KEY ("question_id") REFERENCES "questions" ("id");

ALTER TABLE "photos" ADD FOREIGN KEY ("answer_id") REFERENCES "answers" ("id");

COPY "questions"("id", "product_id", "body", "date_written", "asker_name", "asker_email", "reported", "helpful")
FROM '/Users/chhuong/Documents/HRSFO135/QA/questions.csv'
DELIMITER ','
CSV HEADER;

COPY "answers"("id", "question_id", "body", "date_written", "answerer_name", "answerer_email", "reported", "helpful")
FROM '/Users/chhuong/Documents/HRSFO135/QA/answers.csv'
DELIMITER ','
CSV HEADER;

COPY "photos"("id", "answer_id", "url")
FROM '/Users/chhuong/Documents/HRSFO135/QA/answers_photos.csv'
DELIMITER ','
CSV HEADER;