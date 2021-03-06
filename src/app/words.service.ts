import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

  /*
  lists: WordList[] = [
    {
      id: 1,
      name: 'A Bizarre Poisoning Plot in Oregon',
      score: 0,
      words: [{fr: 'To fight or ague', eng: 'to clash'},
        {fr: 'A group of people who live together and share possessions', eng: 'a commun'},
        {fr: 'A feeling of embarrassment and worry', eng: 'inhibition'},
        {fr: 'A long way from any towns', eng: 'a remote area'},
        {fr: 'A wish to know or learn about something', eng: 'curiosity'},
        {fr: 'To find something unexpectedly', eng: 'to turn up'},
        {fr: 'Completely or extremely (adv.)', eng: 'utterly'},
        {fr: 'A person who lives in a place', eng: 'resident'},
        {fr: 'The fact that you want or plan to do something', eng: 'intent'},
        {fr: 'Able to provide all that you need without help', eng: 'self-sufficient'},
        {fr: 'A place to live', eng: 'accommodation'},
        {fr: 'A round handle that you turn', eng: 'a doorknob'},
        {fr: 'To scatter', eng: 'to sprinkle'},
        {fr: 'To force someone to leave', eng: 'to expel'}]
    },
    {
      id: 2,
      name: 'The history of english',
      score: 0,
      words: [{fr: 'Fashionable in a unusual and noticeable way', eng: 'funky'},
        {fr: 'To search a place or container in a violent and careless way', eng: 'to ransack'},
        {fr: 'Sold without any tax added, esp . at airports', eng: 'duty-free'},
        {fr: 'To make something start to happen, happen faster, or improve', eng: 'to kic-start'},
        {fr: 'The meat from an adult sheep', eng: 'mutton'},
        {fr: 'Unable to be read or understood', eng: 'undecipherable'},
        {fr: 'Useful or convenient', eng: 'handy'},
        {fr: 'A phrase that is often repeated and becomes connected with a particular organization, product, person, etc...', eng: 'a catchphrase'},
        {fr: 'Having the part that is usually at the top turned to be at the bottom', eng: 'upside-down'},
        {fr: 'A person, usually a priest or minister, who gives a religious speech', eng: 'a preacher'},
        {fr: 'Seriousness', eng: 'gravity'},
        {fr: 'To relax after a period of work or anxiety', eng: 'to unwind'},
        {fr: 'A fot stomach, especially on a man', eng: 'a paunch'},
        {fr: 'To remove a person or organization from a position of power', eng: 'to topple'},
        {fr: 'To invent an excuse, a story, etc., often in order to deceive', eng: 'to make up'},
        {fr: 'A vegetable with a hard skin and many seeds at its center', eng: 'a squash'},
        {fr: 'Someone who regularly travels between work and home', eng: 'a commuter'},
        {fr: 'To steal things of little value or in small amounts', eng: 'to pilfer'}]
    },
    {
      id: 3,
      name: 'Attitudes',
      score: 0,
      words: [{fr: 'Croire en quelque chose', eng: 'believe in'},
        {fr: 'choisir', eng: 'go for'},
        {fr: '??tre ?? la hauteur de', eng: 'live up to'},
        {fr: 'Voir quelque chose d\'une certaine mani??re', eng: 'look at'},
        {fr: 'admirer', eng: 'look up to'},
        {fr: '??tre en d??saccord avec', eng: 'object to'},
        {fr: 's\'opposer ??', eng: 'oppose to'},
        {fr: 's\'en prendre ??', eng: 'pick on'},
        {fr: 'rabaisser', eng: 'put down'},
        {fr: 'd??courager', eng: 'put off'},
        {fr: 'supporter', eng: 'put up with'},
        {fr: 'trouver que quelqu\'un a une qualit??', eng: 'see as'},
        {fr: 'se contenter de', eng: 'settle for'},
        {fr: 'frimer', eng: 'show off'},
        {fr: 'soutenir', eng: 'stand for'},
        {fr: 'partir pour signifier son m??contentement', eng: 'walk out'}]
    },
    {
      id: 4,
      name: 'Thinking and knowing',
      score: 0,
      words: [{fr: 'rappeler', eng: 'bring back'},
        {fr: 'revenir', eng: 'come back'},
        {fr: 'comprendre', eng: 'figure out'},
        {fr: 'remonter', eng: 'go back'},
        {fr: 'passer (le temps)', eng: 'go by'},
        {fr: 'entendre parler de (avoir des nouvelles)', eng: 'hear about'},
        {fr: 'entendre parler de (pour la premi??re fois)', eng: 'hear of'},
        {fr: '??tre bien inform?? sur', eng: 'know about'},
        {fr: 'repenser ?? quelque chose', eng: 'look back'},
        {fr: 'transmettre', eng: 'pass on'},
        {fr: 'rappeler quelque chose ?? quelqu\'un', eng: 'remind of'},
        {fr: 'rester grav?? dans l\'esprit', eng: 'stick in'},
        {fr: 'penser ??', eng: 'think of'},
        {fr: 'r??soudre / calculer', eng: 'work out'}]
    },
    {
      id: 5,
      name: 'Planning and organizing',
      score: 0,
      words: [{fr: 'aimt at', eng: 'viser'},
        {fr: 'count on', eng: 'compter sur'},
        {fr: 'end up', eng: 'se retrouver'},
        {fr: 'fit in', eng: 'faire rentrer'},
        {fr: 'follow up', eng: 'faire un suivi de quelque chose'},
        {fr: 'go about', eng: 'sixs\'y prendre (pour faire quelque chose)'},
        {fr: 'line up', eng: 'organiser'},
        {fr: 'plan for', eng: 'planifier'},
        {fr: 'pull off', eng: 'r??ussir (?? faire quelque chose)'},
        {fr: 'rule out', eng: '??carter'},
        {fr: 'run into', eng: 'renconter (des probl??mes)'},
        {fr: 'set out', eng: 'entreprendre'},
        {fr: 'start on', eng: 'commencer avec'},
        {fr: 'turn out', eng: 's\'av??rer'},
        {fr: 'wind up', eng: 'finir'}]
    },
    {
      id: 6,
      name: 'Vocabulaire avanc??',
      score: 0,
      words: [{fr: 'foremost', eng: 'principal'},
        {fr: 'meaningful', eng: 'significatif'},
        {fr: 'thorough', eng: 'minutieux'},
        {fr: 'overwhelming', eng: '??crasant'},
        {fr: 'peculiar', eng: 'curieux, particulier'},
        {fr: 'convenient', eng: 'commode'},
        {fr: 'armoured', eng: 'blind??'},
        {fr: 'reckless', eng: 'irr??fl??chi'},
        {fr: 'straightforward', eng: 'simple, direct'},
        {fr: 'unaware of ???', eng: 'inconscient de ???'},
        {fr: 'barely', eng: '?? peine'},
        {fr: 'to envision', eng: 'envisager, pr??voir'},
        {fr: 'gradually', eng: 'progressivement'},
        {fr: 'awhile', eng: 'pendant quelque temps'},
        {fr: 'genuinely', eng: 'authentiquement'},
        {fr: 'to overthrow', eng: 'renverser'},
        {fr: 'conviction', eng: 'la condamnation'},
        {fr: 'mortgage', eng: 'l???hypoth??que'},
        {fr: 'to shrink', eng: 'r??tr??cir'}]
    },
    {
      id: 7,
      name: 'Nombre',
      score: 0,
      words: [{fr: 'un', eng: 'one'}, {fr: 'deux', eng: 'two'}, {fr: 'trois', eng: 'three'}, {fr: 'quatre', eng: 'four'}, {fr: 'cinq', eng: 'five'}, {fr: 'six', eng: 'six'}]
    }
  ];*/

  lists: WordList[];

  constructor(private http: HttpClient) {
    this.currentId = 1;
    http.get('https://tncy-crown.herokuapp.com/wordslist').toPromise().then(data => {
      this.lists = data as WordList[];
    });
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
