import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'testProject',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44357',
    redirectUri: baseUrl,
    clientId: 'testProject_App',
    responseType: 'code',
    scope: 'offline_access testProject',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44357',
      rootNamespace: 'testProject',
    },
  },
} as Environment;
