import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'NewsWeb',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44357',
    redirectUri: baseUrl,
    clientId: 'NewsWeb_App',
    responseType: 'code',
    scope: 'offline_access NewsWeb',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44357',
      rootNamespace: 'NewsWeb',
    },
  },
} as Environment;
