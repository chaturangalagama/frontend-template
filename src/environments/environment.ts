// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'dev',
  apiPath: {
    API_MEMBER_DETAILS_URL: 'http://localhost:8089/api/v1',
    API_LOGIN_URL: 'http://localhost:8089'
  }
};
