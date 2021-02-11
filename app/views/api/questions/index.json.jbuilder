@questions.each do |question|
    json.set! question.id do
        json.id question.id
        json.title question.title
        json.body question.body
        json.user_id question.user_id
        json.answers question.answers
    end
end