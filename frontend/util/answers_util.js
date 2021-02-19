export const createAnswer = (answer, questionId) =>{
    return $.ajax({
        url: `/api/questions/${questionId}/answers`,
        method: 'POST',
        data : {answer}
    })
}

// export const fetchAnswer = (answerId) =>{
//     return $.ajax({
//         url: `/api/answers/${answerId}`,
//         method: 'GET'
//     })
// }

// export const deleteAnswer = (answerId) => {
//     return $.ajax({
//         url: `/api/answers/${answerId}`,
//         method: 'DELETE'
//     })
// }

