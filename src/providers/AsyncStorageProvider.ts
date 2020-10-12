import { IDataProvider } from '@feature-framework/core';
import AsyncStorage from '@react-native-community/async-storage';

export default class AsyncStorageProvider implements IDataProvider {
  load(key: string): Promise<string | null> {
    return new Promise(resolve => {
      AsyncStorage.getItem(key).then((result) => resolve(result)).catch(() => resolve(null));
    });
  }

  remove(key: string): Promise<boolean> {
    return new Promise(async (resolve) => {
      const check = await this.load(key);
      if (check === null) {
        resolve(false);
      } else {
        AsyncStorage.removeItem(key).then(() => resolve(true));
      }
    });
  }

  save(key: string, data: unknown): Promise<boolean> {
    return new Promise((resolve) => {
      AsyncStorage.setItem(key, JSON.stringify(data))
        .then(() => resolve(true))
        .catch(() => resolve(false));
    });
  }
}
