import { Injectable } from '@angular/core';

export interface Word{
  fr: string;
  eng: string;
}

export interface WordList {
  id: number;
  score: number;
  name: string;
  words: Word[];
}

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  currentId: number;

  lists: WordList[] = [
    {
      id: 1,
      name: 'Nombre',
      score: 0,
      words: [{fr: 'un', eng: 'one'}, {fr: 'deux', eng: 'two'}, {fr: 'trois', eng: 'three'}, {fr: 'quatre', eng: 'four'}, {fr: 'cinq', eng: 'five'}, {fr: 'six', eng: 'six'}]
    }
  ];

  constructor() {
    this.currentId = 1;
  }

  getList(id: number): WordList{
    return this.lists.find((x) => x.id === id );
  }
  addList(name: string, content: string ){
    this.currentId++;
    const wordlist: WordList = {
      id: this.currentId,
      name,
      score: 0,
      words: null
    };
    this.lists.push(wordlist);
  }
}
