import {Component, OnInit} from '@angular/core';
import {WordsService} from '../words.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{


  constructor(private nativeAudio: NativeAudio) { }

  IonViewWillEnter(){
    this.nativeAudio.preloadSimple('correct_sound', 'assets/sounds/Correct_Answer.mp3');
  }

  play_correct(){
    this.nativeAudio.play('correct_sound');
  }

  IonViewWillLeave(){
    this.nativeAudio.unload('correct_sound');
  }

  ngOnInit(){
  }
}
