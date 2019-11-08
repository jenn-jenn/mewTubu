export const signup = (user) => {
    console.log('signing up')
    return $.ajax({
        url: `/api/users`,
        method: 'POST',
        data: { user }
    })
};

export const login = (user) => {
    console.log('logging in')
    return $.ajax({
        url: `/api/session`,
        method: 'POST',
        data: { user }
    })
};

export const logout = () => {
    console.log('logging out')
    return $.ajax({
        url: `/api/session`,
        method: 'DELETE'
    })
};