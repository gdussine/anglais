import { Injectable } from '@angular/core';
import {WordsService} from './words.service';
import {AudioService} from './audio.service';

@Injectable({
  providedIn: 'root'
})
export class JeuService {

  private bestScoreMap: any;

  constructor(private wordsService: WordsService, private audioService: AudioService) {
    this.reset();
  }

  public reset(){
    this.bestScoreMap = new Map();
    for (const wordlist of this.wordsService.lists){
      console.log(wordlist.name);
      this.bestScoreMap.set(wordlist.name, 0);
    }
  }

  public setScore(listName: string, score: number){
    if (this.bestScoreMap.get(listName) < score) {
      this.bestScoreMap.set(listName, score);
      this.audioService.preload('congratulation', 'assets/sounds/congratulations.mp3');
      this.audioService.play('congratulation');
    }
  }

}
