import {Component, OnInit} from '@angular/core';
import {Word, WordList, WordsService} from '../words.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PopoverController} from '@ionic/angular';
import {ScorePage} from '../score/score.page';
import {AudioService} from '../audio.service';
import {RankService} from '../rank.service';


@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.page.html',
  styleUrls: ['./jeu.page.scss'],
})
export class JeuPage implements OnInit {

  modeVisibility = 'visible';
  cashVisibility = 'hidden';
  carreVisibility = 'hidden';
  duoVisibility = 'hidden';

  score = 0;
  scoreFinal = 0;

  cashAnswer: string;

  list: WordList;
  listToGuess: Word[] = [];
  index = 0;
  carreAnswers: Word[] = [];
  duoAnswers: Word[] = [];

  constructor(
    private route: ActivatedRoute,
    private wordsService: WordsService,
    private router: Router,
    private popoverController: PopoverController,
    private audioService: AudioService,
    private rankService: RankService) {
  }

  ngOnInit() {
    this.initGame();
    this.audioService.preload('correct', 'assets/sounds/Correct_Answer.mp3');
    this.audioService.preload('wrong', 'assets/sounds/Wrong_Answer.mp3');
  }

  initGame(){
    this.index = 0;
    this.score = 0;
    this.listToGuess = [];
    this.list = this.wordsService.getList(+this.route.snapshot.paramMap.get('id'));
    this.list.words.forEach(word => this.listToGuess.push(word));
    this.shuffle(this.listToGuess);
    this.initSet();

  }

  initSet(){
    this.onInitMode();
    this.carreAnswers = this.pick(this.carreAnswers, 3);
    this.duoAnswers = this.pick(this.duoAnswers, 1);
    this.shuffle(this.carreAnswers);
    this.shuffle(this.duoAnswers);
  }


  pick(answer: Word[], nbPick: number){
    answer = [this.listToGuess[this.index]];
    let counter = 0;
    const rands = [this.index];
    const len = this.listToGuess.length;
    while (counter < nbPick){
      const rand = Math.floor(Math.random() * len);
      if (!rands.includes(rand, 0)){
        rands.push(rand);
        answer.push(this.listToGuess[rand]);
        counter++;
      }
    }
    return answer;
  }

  shuffle(array: Word[]){
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  }

  next(){
    this.index++;
    if (this.index < this.listToGuess.length){
      this.initSet();
    } else {
      this.scoreFinal = this.score + 0;
      this.presentPopover().then((x) => {
        this.rankService.addScore(this.list.id, this.scoreFinal);
        this.initGame();
      });
    }
  }

  reponseInput(){
    if (this.cashAnswer === this.listToGuess[this.index].eng){
      this.score = this.score + 4;
      this.audioService.play('correct');
    } else{
      this.audioService.play('wrong');
    }
    this.cashAnswer = '';
    this.next();
  }

  reponseButton(answer: Word, pt: number){
    if (answer.eng === this.listToGuess[this.index].eng){
      this.score = this.score + pt;
      this.audioService.play('correct');
    } else{

      this.audioService.play('wrong');
    }
    this.next();
  }

  async presentPopover() {
    const popover = await this.popoverController.create({
      component: ScorePage,
      componentProps: {score: this.score, id: this.list.id},
      cssClass: 'my-custom-class',
      translucent: true
    });
    return await popover.present();
  }

  hideAllMode(){
    this.modeVisibility = 'hidden';
    this.cashVisibility = 'hidden';
    this.carreVisibility = 'hidden';
    this.duoVisibility = 'hidden';
  }

  onModeCarre(){
    this.hideAllMode();
    this.carreVisibility = 'visible';
  }

  onModeDuo(){
    this.hideAllMode();
    this.duoVisibility = 'visible';
  }

  onInitMode(){
    this.hideAllMode();
    this.modeVisibility = 'visible';
  }

  onModeCash(){
    this.hideAllMode();
    this.cashVisibility = 'visible';
  }




}
