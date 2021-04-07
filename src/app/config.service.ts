import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {User} from './user.service';
@Injectable({
  providedIn: 'root'
})


export class ConfigService {

  constructor(private storage: Storage) {
    storage.create();
  }

  async getUser(): Promise<User> {
    return await this.storage.get('user');
  }
  async setUser(user: User): Promise<User> {
    return await this.storage.set('user', user);
  }

}
