import _axios from 'axios';

export class ApiService {
  static axios = _axios.create({
    baseURL: 'https://relome-p0n2m93wn-muhammadbuttsprintx.vercel.app/api/',
  });

  static async get(url: string, config?: any): Promise<any> {
    try {
      const res = await ApiService.axios.get(url, config);
      if (res) {
        return res.data;
      }
    } catch (error) {
      ApiService.handleError(error);
      return Promise.reject(error);
    }
  }

  static async post(url: string, body?: object, config?: any): Promise<any> {
    try {
      const res = await ApiService.axios.post(url, body, config);
      if (res) {
        return res.data;
      }
    } catch (error) {
      ApiService.handleError(error);
      return Promise.reject(error);
    }
  }

  static async put(url: string, body: object, config?: any): Promise<any> {
    try {
      const res = await ApiService.axios.put(url, body, config);
      if (res) {
        return res.data;
      }
    } catch (error) {
      ApiService.handleError(error);
      return Promise.reject(error);
    }
  }

  static async delete(url: string, config?: any): Promise<any> {
    try {
      const res = await ApiService.axios.delete(url, config);
      if (res) {
        return res.data;
      }
    } catch (error) {
      ApiService.handleError(error);
      return Promise.reject(error);
    }
  }

  private static handleError(error: any) {
    console.log(error);
  }
}
