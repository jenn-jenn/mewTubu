export const fetchUsers = () => {
    // console.log('fetchin all users')
    return $.ajax({
        url: '/api/users',
        method: 'GET'
    });
}