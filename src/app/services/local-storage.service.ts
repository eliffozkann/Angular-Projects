import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string): string | null {
    let value = localStorage.getItem(key);
    return value;
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}
