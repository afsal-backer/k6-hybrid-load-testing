import apiTest from './api-test.ts';
import harTest from './har-test.ts';
import browserTest from './browser-test.ts';

export const options = {
  cloud: {
    projectId: __ENV.K6_CLOUD_PROJECT_ID,
    name: 'hybrid-test',
  },

  scenarios: {
    api_load: {
      executor: 'constant-vus',
      exec: 'testAPI',
      vus: 10,
      duration: '10s',
    },
    har_load: {
      executor: 'constant-vus',
      exec: 'testHAR',
      vus: 10,
      duration: '20s',
      startTime: '5s',
    },
    browser_load: {
      executor: 'constant-vus',
      duration: '20s',
      startTime: '10s',
      exec: 'testBrowser',
      vus: 5,
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};

export function testAPI() {
  apiTest();
}

export function testHAR() {
  harTest();
}

export function testBrowser() {
  browserTest();
}
