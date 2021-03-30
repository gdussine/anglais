import { Injectable } from '@angular/core';

export interface Word{
  fr: string;
  eng: string;
}

export interface WordList {
  id: number;
  name: string;
  words: Word[];
}

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  lists: WordList[] = [
    {
      id: 1,
      name: 'Nombre',
      words: [{fr: 'un', eng: 'one'}, {fr: 'deux', eng: 'two'}, {fr: 'trois', eng: 'three'}, {fr: 'quatre', eng: 'four'}, {fr: 'cinq', eng: 'five'}, {fr: 'six', eng: 'six'}]
    }
  ];

  constructor() {

  }

  getList(id: number): WordList{
    return this.lists.find((x) => x.id === id );
  }
}
