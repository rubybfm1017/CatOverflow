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




