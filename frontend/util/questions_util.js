export const createQuestion = (question) =>{
    return $.ajax({
        url: `/api/questions`,
        method: 'POST',
        data : {question}
    })
}

export const fetchQuestions = () =>{
    return $.ajax({
        url: `/api/questions`,
        method: 'GET'
    })
}

export const fetchQuestion = (QuestionId) =>{
    return $.ajax({
        url: `/api/questions/${QuestionId}`,
        method: 'GET'
    })
}

export const updateQuestion = (question) => {
    return $.ajax({
        url: `api/questions/${question.id}`,
        method: 'PATCH',
        data: { question }
    })
}
export const deleteQuestion = (QuestionId) => {
    return $.ajax({
        url: `/api/questions/${QuestionId}`,
        method: 'DELETE'
    })
}



