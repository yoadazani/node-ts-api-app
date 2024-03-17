export default {
    env: 'NODE_ENV',
    app: {
        start: `Server is running on {0}`
    },
    server: {
        port: 3000,
        host: `localhost`,
        protocol: `http`,
        url: '{protocol}://{host}:{port}',
    },
    auth: {
        jwtSecret: 'JWT_SECRET',
        expiresIn: '1h',
    },
    email: {
        emailUser: 'EMAIL_USER',
        emailPass: 'EMAIL_PASS',
    },
};
