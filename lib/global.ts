const env: { [key: string]: string } = {};

const init = (obj: { [key: string]: any }): void => {
  for (const key of Object.keys(obj)) {
    env[key] = typeof obj[key] === 'string' ? obj[key] : JSON.stringify(obj[key]);
  }
};

const storeEnvVars = () => ({ ...env });

export { env, init, storeEnvVars };
