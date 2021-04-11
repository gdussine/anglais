import { Component, OnInit } from '@angular/core';
import {Ranking, RankService} from '../rank.service';
import {ActivatedRoute} from '@angular/router';
import {ConfigService} from '../config.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.page.html',
  styleUrls: ['./rank.page.scss'],
})
export class RankPage implements OnInit {
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
  firstScore: string;
  secondScore: string;
  thirdScore: string;
  fourthScore: string;
  fifthScore: string;
  id: number;
  wordListName: string;
  userid: number;
  isInTheTop: boolean;
  isRanked: boolean;
  username: string;
  userRank: number;
  userScore: number;

  constructor(private rankService: RankService, private route: ActivatedRoute, private configService: ConfigService, private userService: UserService) { }

  public getRanking(){
    this.id = +this.route.snapshot.paramMap.get('id');
    this.wordListName = 'Nombre'; // à modifier
    this.configService.getUser().then( user => {
      this.userid = user.id;
      this.username = user.name;
    });
    this.isInTheTop = false;
    this.rankService.rankByWords(this.id).then( rankings => {
      try{
        for (let i = 0; i < 5; i++) {
          if (rankings[i].userId === this.userid){
            this.isInTheTop = true;
          }
        }
      }
      catch (Error){
        console.log('Moins de 5 joueurs');
        console.log(Error.message);
      }
      try{
        this.userService.byId(rankings[0].userId).then(user => this.first = user.name);
        this.firstScore = rankings[0].score.toString();
        //
        this.userService.byId(rankings[1].userId).then(user => this.second = user.name);
        this.secondScore = rankings[1].score.toString();
        //
        this.userService.byId(rankings[2].userId).then(user => this.third = user.name);
        this.thirdScore = rankings[2].score.toString();
        //
        this.userService.byId(rankings[3].userId).then(user => this.fourth = user.name);
        this.fourthScore = rankings[3].score.toString();
        //
        this.userService.byId(rankings[4].userId).then(user => this.fifth = user.name);
        this.fifthScore = rankings[4].score.toString();
      }
      catch (Error){
        console.log('Moins de 5 joueurs');
        console.log(Error.message);
      }
      this.isRanked = false;
      try{
        for (let i = 0; i < rankings.length; i++) { // oui j'aurais pu faire un seul for, nsm
          if (rankings[i].userId === this.userid){
            this.userRank = i + 1;
            this.userScore = rankings[i].score;
            this.isRanked = true;
          }
        }
      }
      catch (Error){
        console.log('Moins de 5 joueurs');
        console.log(Error.message);
      }
    });
  }
  ngOnInit() {
    this.getRanking();
  }

}
