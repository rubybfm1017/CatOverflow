export const createVote = (questionId, answerId) =>{
    return $.ajax({
        url: `/api/questions/${questionId}/answers/${answerId}/votes`,
        method: 'POST'
    })
}

export const deleteVote = (questionId, answerId) =>{
    return $.ajax({
        url: `/api/questions/${questionId}/answers/${answerId}/votes/1`,
        method: 'DELETE'
    })
}
