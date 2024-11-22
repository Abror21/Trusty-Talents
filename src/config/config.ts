declare global {
  interface Window {
    runConfig: {
      frontendUrl: string;
      backendUrl: string;
      myCareerBackendUrl: string;
      nodeEnv: string;
      appDateFormat: string;
      latviaLocationSrc: string;
      uzbekistanLocationSrc: string;
    };
  }
}

export const routes = {
  api: {
    frontendUrl: window?.runConfig?.frontendUrl,
    baseUrl: window?.runConfig?.backendUrl,
    nodeEnv: window.runConfig?.nodeEnv,
    myCareerBackendUrl: window.runConfig?.myCareerBackendUrl,
    appDateFormat: window.runConfig?.appDateFormat,
    latviaLocationSrc: window.runConfig?.latviaLocationSrc,
    uzbekistanLocationSrc: window.runConfig?.uzbekistanLocationSrc,
  },
};
