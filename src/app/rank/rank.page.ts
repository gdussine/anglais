import { Component, OnInit } from '@angular/core';
import {RankService} from '../rank.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.page.html',
  styleUrls: ['./rank.page.scss'],
})
export class RankPage implements OnInit {

  constructor(private rankService: RankService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
