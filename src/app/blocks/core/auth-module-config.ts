import { environment } from '../../../environments/environment';
import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: [environment.backEnd],
    sendAccessToken: true,
  }
};
