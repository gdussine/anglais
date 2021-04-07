import { Component, OnInit } from '@angular/core';
import {WordList, WordsService} from '../words.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selectionscore.page.html',
  styleUrls: ['./selectionscore.page.scss'],
})
export class SelectionScorePage implements OnInit {

  lists: WordList[];

  constructor(private wordsService: WordsService) {
    this.lists = wordsService.lists;
  }

  ngOnInit() {
  }

}
