import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-import',
  templateUrl: './import.page.html',
  styleUrls: ['./import.page.scss'],
})
export class ImportPage implements OnInit {

  soundClass: string;


  constructor(private fileChooser: FileChooser) { }

  ngOnInit() {

  }

  public file_click(){
    this.fileChooser.open();
  }
}
