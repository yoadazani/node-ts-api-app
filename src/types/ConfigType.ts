type EnvConfig = string;

type ServerConfig = {
    url: string;
    port: number;
    host: string;
    protocol: string;
};

type AppConfig = {
    start: string;
};

type EmailConfig = {
    emailUser: string;
    emailPass: string;
};

type AuthConfig = {
    jwtSecret: string;
    expiresIn: string;
};

export { EnvConfig, EmailConfig, ServerConfig, AppConfig, AuthConfig };
