@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :user_id, :question_id, :body, :votes
  end
end