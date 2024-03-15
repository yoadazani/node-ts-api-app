import config from 'config';

interface NodeConfig {
    env: string;
    port: number;
    host: string;
    protocol: string;
    url: string;
}

const nodeConfig: NodeConfig = {
    env: config.get<string>("env"),
    port: config.get<number>("port"),
    host: config.get<string>("host"),
    protocol: config.get<string>("protocol"),
    url: config.get<string>("url"),
}

export default nodeConfig