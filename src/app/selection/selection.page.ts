import { Component, OnInit } from '@angular/core';
import {WordList, WordsService} from '../words.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.page.html',
  styleUrls: ['./selection.page.scss'],
})
export class SelectionPage implements OnInit {

  lists: WordList[];

  constructor(private wordsService: WordsService) {
    this.lists = wordsService.lists;
  }

  ngOnInit() {
  }

}
