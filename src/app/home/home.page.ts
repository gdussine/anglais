import {Component, OnInit} from '@angular/core';
import {WordsService} from '../words.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import {AudioService} from '../audio.service';
import {ScorePage} from '../score/score.page';
import {PopoverController} from '@ionic/angular';
import {OptionsPage} from '../options/options.page';
import {ImportPage} from '../import/import.page';
import {UserService} from '../user.service';
import {ConfigService} from '../config.service';
import {strict} from 'assert';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private audioService: AudioService,
              private popoverController: PopoverController,
              private userService: UserService,
              private configService: ConfigService) { }

  play_woosh(){
    this.audioService.play('18');
  }

  ngOnInit(){
    this.audioService.preload('18', 'assets/sounds/whoosh-18.mp3');
  }

  async importPopover() {
    const popover = await this.popoverController.create({
      component: ImportPage,
      cssClass: 'my-custom-class',
      translucent: true
    });
    return await popover.present();
  }


  import_click() {
    this.importPopover();
    this.play_woosh();
  }

  async optionPopover() {
    const popover = await this.popoverController.create({
      component: OptionsPage,
      cssClass: 'my-custom-class',
      translucent: true
    });
    return await popover.present();
  }


  option_click() {
    this.optionPopover();
    this.play_woosh();
  }
}
