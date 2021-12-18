import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'testProject',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44364',
    redirectUri: baseUrl,
    clientId: 'testProject_App',
    responseType: 'code',
    scope: 'offline_access testProject',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44364',
      rootNamespace: 'testProject',
    },
  },
} as Environment;
