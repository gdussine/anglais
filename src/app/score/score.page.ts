import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {


  constructor(public router: Router,
              public popover: PopoverController,
              public navParams: NavParams) { }

  ngOnInit() {}

  clickRejouer(id: string){
    this.popover.dismiss().then((isDismiss) => {
      this.router.navigate(['/jeu/' + id]);
    });
  }

  clickMenu(){
    this.popover.dismiss().then((isDismiss) => {
      this.router.navigate(['/home']);
    });

  }

}
