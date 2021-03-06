/* eslint-disable import/no-dynamic-require */
// Using Should style
chai.should();
const fs = require('fs');
const path = require('path');
const chai = require('chai');

describe('create ice app', () => {
  const fixturesDir = path.join(__dirname, 'features');

  const cases = fs.readdirSync(fixturesDir);
  for (let i = 0; i < cases.length; i++) {
    const caseName = cases[i];
    const promise = require(path.join(fixturesDir, caseName, 'test.js'));
    it(`should ${caseName}`, async () => {
      await promise();
    }).timeout(5000);
  }
});
