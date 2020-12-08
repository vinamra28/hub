import axios from 'axios';
import { API_URL } from '../config/constants';
import { ICategory } from '../store/category';
import { IResource, IVersion } from '../store/resource';

export interface Api {
  categories(): Promise<ICategory>;
  resources(): Promise<IResource>;
  resourceVersion(resourceId: string): Promise<IVersion>;
  versionUpdate(versionId: string): Promise<IVersion>;
}

export class Hub implements Api {
  async categories() {
    try {
      return axios.get(`${API_URL}/categories`).then((response) => response.data);
    } catch (err) {
      return err.response;
    }
  }

  async resources() {
    try {
      return axios.get(`${API_URL}/resources`).then((response) => response.data);
    } catch (err) {
      return err.response;
    }
  }

  async resourceVersion(resourceId: string) {
    try {
      return axios
        .get(`${API_URL}/resource/${resourceId}/versions`)
        .then((response) => response.data);
    } catch (err) {
      return err.response;
    }
  }

  async versionUpdate(versionId: string) {
    try {
      return axios
        .get(`${API_URL}/resource/version/${versionId}`)
        .then((response) => response.data);
    } catch (err) {
      return err.response;
    }
  }
}
