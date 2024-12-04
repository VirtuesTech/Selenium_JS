import axios from 'axios';

class ApiUtils {
  async getRequest(url, params = {}) {
    try {
      const response = await axios.get(url, { params });
      return response;
    } catch (error) {
      console.error('GET request error:', error);
      throw error;
    }
  }

  async postRequest(url, data) {
    try {
      const response = await axios.post(url, data);
      return response;
    } catch (error) {
      console.error('POST request error:', error);
      throw error;
    }
  }

  async putRequest(url, data) {
    try {
      const response = await axios.put(url, data);
      return response;
    } catch (error) {
      console.error('PUT request error:', error);
      throw error;
    }
  }

  async patchRequest(url, data) {
    try {
      const response = await axios.patch(url, data);
      return response;
    } catch (error) {
      console.error('PATCH request error:', error);
      throw error;
    }
  }

  async deleteRequest(url) {
    try {
      const response = await axios.delete(url);
      return response;
    } catch (error) {
      console.error('DELETE request error:', error);
      throw error;
    }
  }
}

export default new ApiUtils();
