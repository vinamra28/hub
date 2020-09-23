interface API_CONFIG {
  API_URL: string;
}

declare global {
  interface Window {
    config: API_CONFIG;
  }
}

window.config = window.config || {
  API_URL: 'https://api-tekton-hub-staging.apps.openshift-web.p0s5.p1.openshiftapps.com'
};

export const API_URL = window.config.API_URL;
