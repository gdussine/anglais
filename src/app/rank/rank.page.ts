import { Component, OnInit } from '@angular/core';
import {Ranking, RankService} from '../rank.service';
import {ActivatedRoute} from '@angular/router';
import {ConfigService} from '../config.service';

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

  constructor(private rankService: RankService, private route: ActivatedRoute, private configService: ConfigService) { }

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
        this.first = rankings[0].userId.toString();
        this.firstScore = rankings[0].score.toString();
        //
        this.second = rankings[1].userId.toString();
        this.secondScore = rankings[1].score.toString();
        //
        this.third = rankings[2].userId.toString();
        this.thirdScore = rankings[2].score.toString();
        //
        this.fourth = rankings[3].userId.toString();
        this.fourthScore = rankings[3].score.toString();
        //
        this.fifth = rankings[4].userId.toString();
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
