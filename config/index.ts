import config from 'config';
import {
    AppConfig,
    AuthConfig,
    EmailConfig,
    EnvConfig,
    ServerConfig,
} from '../src/types/ConfigType';

const env: EnvConfig = config?.get<string>('env');

const serverConfig: ServerConfig = {
    url: config?.get<string>('server.url'),
    port: config?.get<number>('server.port'),
    host: config?.get<string>('server.host'),
    protocol: config?.get<string>('server.protocol'),
};

const appConfig: AppConfig = {
    start: config?.get<string>('app.start'),
};

const authConfig: AuthConfig = {
    jwtSecret: config?.get<string>('auth.jwtSecret'),
    expiresIn: config.get<string>('auth.expiresIn'),
};

const emailConfig: EmailConfig = {
    emailUser: config?.get<string>('email.emailUser'),
    emailPass: config?.get<string>('email.emailPass'),
};

export { env, serverConfig, appConfig, emailConfig, authConfig };
