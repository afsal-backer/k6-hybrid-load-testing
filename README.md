# K6 Hybrid Load Testing

A hybrid load testing suite using K6 that combines API, HAR, and Browser testing (using Playwright) approaches.

## Overview

This project demonstrates hybrid load testing using K6, implementing three different testing approaches:
- API Load Testing
- HAR (HTTP Archive) Replay Testing
- Browser-based Testing
- Hybrid Testing combining API, HAR, and Browser testing

## Prerequisites

- Node.js (Latest LTS version)
- K6 installed globally (`brew install k6` for MacOS)
- Chrome/Chromium browser for browser-based tests

## Installation

1. Clone the repository
2. Install dependencies

## Available Scripts

- `npm run demo` - Run the demo test (check everything is working)
- `npm run api` - Run the API test
- `npm run browser` - Run the Browser test
- `npm run har` - Run the HAR test
- `npm run hybrid` - Run the Hybrid test
- `npm run cloud` - Run the Hybrid test in the cloud (requires K6 Cloud project ID set in package.json)

## Project Structure

k6-hybrid-load-test/
├── src/
│ ├── api-test.ts # API load testing scenarios
│ ├── browser-test.ts # Browser-based testing scenarios
│ ├── har-test.ts # HAR replay testing scenarios
│ ├── hybrid-test.ts # Combined test scenarios
│ └── k6-demo.ts # Demo test file
├── users.json # Test user credentials
├── logs # K6 logs
└── package.json # Project dependencies and scripts

## Test Scenarios

### API Load Test

- Tests various API endpoints
- Includes login functionality
- Custom metrics for success/failure tracking

### HAR Test

- Replays recorded HTTP traffic
- Includes multiple page navigation scenarios and static resources
- Implements sleep times for realistic user behavior

### Browser Test

- Simulates user interactions in the browser
- Tests UI elements and navigation
- Includes form submissions and button clicks

### Hybrid Test

- Combines all three testing approaches
- Configurable virtual users and duration
- Supports cloud execution
