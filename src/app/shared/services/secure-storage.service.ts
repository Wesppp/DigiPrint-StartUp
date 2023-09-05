import { Injectable } from '@angular/core';

import { SecureStoragePlugin } from 'capacitor-secure-storage-plugin';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecureStorageService {
  public set(key: string, value: string): Observable<{ value: boolean }> {
    return from(SecureStoragePlugin.set({ key, value }));
  }

  public get(key: string): Observable<{ value: string }> {
    return from(SecureStoragePlugin.get({ key }));
  }

  public remove(key: string): Observable<{ value: boolean }> {
    return from(SecureStoragePlugin.remove({ key }));
  }
}
