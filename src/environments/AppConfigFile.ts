export class AppConfigFile {
  API_MEMBER_DETAILS_URL: string;
  API_LOGIN_URL: string;
  constructor(
    API_MEMBER_DETAILS_URL?: string,
    API_LOGIN_URL?: string
  ) {
    this.API_MEMBER_DETAILS_URL = API_MEMBER_DETAILS_URL || '';
    this.API_LOGIN_URL = API_LOGIN_URL || '';
  }
}
