import axios from 'axios';

const api = {
    user: {
        login: (credentials) => axios.post('api/auth', { credentials }).then(res => res.data.user),
        signup: (user) => axios.post('/api/users', { user }).then(res => res.data.user),
        confirm: (token) => axios.post('/api/auth/confirmation', { token }).then(res => res.data.user),
        resetPasswordRequest: (email) => axios.post('/api/auth/reset_password_request', { email }),
        validateResetPasswordToken: (token) => Promise.resolve(console.log(token))
    },
    tweet: {
    	create: (tweet) => Promise.resolve({ status: 200 })
    }
}

export default api;