export const createUser = (user) =>{
    return $.ajax({
        url: `/api/users`,
        method: 'POST',
        data : {user}
    })
}

export const fetchUsers = () =>{
    return $.ajax({
        url: '/api/users',
        method: 'GET'
    })
}

export const createSession = (user) =>{
    return $.ajax({
        url:'/api/session',
        method: 'POST',
        data :{user}
    })
}
export const destroySession = () =>{
    return $.ajax({
        url:'/api/session',
        method: 'DELETE'
    })
}