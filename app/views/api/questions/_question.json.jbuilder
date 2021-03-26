#json.extract! question, :id, :title, :body, :user_id, :answers
json.id question.id
json.title question.title
json.body question.body
json.user_id question.user_id
json.answers question.answers.each do |answer|
    json.extract! answer, :id, :user_id, :question_id, :body, :votes
end