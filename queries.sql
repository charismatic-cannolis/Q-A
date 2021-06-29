SELECT
  JSON_AGG(
    JSON_BUILD_OBJECT(
      "product_id", questions.product_id,
      "body", questions.body,
      "date_written", questions.date_written,
      "asker_name", questions.asker_name,
      "asker_email", questions.asker_email,
      "helpful", questions.helpful,
      "reported", questions.reported,
      "answers", answers
    )
  ) questions
FROM (SELECT * from questions limit 5) q
LEFT JOIN (
  select
    question_id,
      JSON_AGG(
        JSON_BUILD_OBJECT (
          "id", answers.id,
          "question_id", answers.question_id,
          "body", answers.body,
        )
      )
)
