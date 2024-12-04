import { expect } from 'chai';
import ApiUtils from '../utils/apiUtils.js';
import fs from 'fs';
const testData = JSON.parse(fs.readFileSync(new URL('../data/testData.json', import.meta.url)));

describe('API Testing with Axios', function() {

  it('GET request should return status 200', async function() {
    const response = await ApiUtils.getRequest(testData.getRequest.url);
    expect(response.status).to.equal(testData.getRequest.expectedStatus);
    expect(response.data).to.have.property('id', testData.getRequest.expectedId);
  });

  it('POST request should create a new resource', async function() {
    const response = await ApiUtils.postRequest(testData.postRequest.url, testData.postRequest.payload);
    expect(response.status).to.equal(testData.postRequest.expectedStatus);
    expect(response.data).to.include(testData.postRequest.payload);
  });

  it('PUT request should update the resource', async function() {
    const response = await ApiUtils.putRequest(testData.putRequest.url, testData.putRequest.payload);
    expect(response.status).to.equal(testData.putRequest.expectedStatus);
    expect(response.data.title).to.equal(testData.putRequest.expectedTitle);
  });

  it('PATCH request should modify a part of the resource', async function() {
    const response = await ApiUtils.patchRequest(testData.patchRequest.url, testData.patchRequest.payload);
    expect(response.status).to.equal(testData.patchRequest.expectedStatus);
    expect(response.data.title).to.equal(testData.patchRequest.expectedTitle);
  });

  it('DELETE request should remove the resource', async function() {
    const response = await ApiUtils.deleteRequest(testData.deleteRequest.url);
    expect(response.status).to.equal(testData.deleteRequest.expectedStatus);
  });
});
