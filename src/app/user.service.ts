import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';
import {Subscription} from 'rxjs';


export interface User{
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private config: ConfigService) {
  }


  loadUser(name: string): Promise<User>{
    return this.http.get('http://localhost:8080/users/' + name).toPromise().then( data => {
      const user = data as User;
      this.config.setUser(user);
      return user;
    });
  }

}