import 'dotenv/config';

class Config {
    getEnv(key) {
        const value = process.env[key];

        if (typeof value === 'string') {
            return value;
        }
        return '';
    }
}

export default Config;
