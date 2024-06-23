
interface Config {
    APP_CODE?: string;
    APP_TITLE?: string;
    APP_NAME?: string;
    ENV?: string;
    IDLE_TIME?: number;
  }
export const CONFIG: Config = {
    APP_CODE: process.env.REACT_APP_CODE,
    APP_TITLE: process.env.REACT_APP_TITLE,
    APP_NAME: process.env.REACT_APP_NAME,
    ENV: process.env.REACT_APP_ENV,
    IDLE_TIME: parseInt(process.env.REACT_APP_IDLE_TIME || '0'),
};