import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigService} from './config.service';

export interface Ranking{
  userId: number;
  wordsListId: number;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class RankService {

  ranks: Ranking[];

  constructor(private http: HttpClient, private config: ConfigService) {

  }

  public updateScore(){
    this.http.get('https://tncy-crown.herokuapp.com/rank').toPromise().then(data => {
      this.ranks = data as Ranking[];
    });
  }

  public addScore(wordsListId: number, score: number){
    this.config.getUser().then(user => {
      this.http.get('https://tncy-crown.herokuapp.com/rank/new?userId='
        + user.name + '&wordsListId='
        + wordsListId + '&score=' + score).toPromise().then(data => {
          this.updateScore();
        }
      );
    });

  }
}
