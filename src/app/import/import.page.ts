import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';
import {AudioService} from '../audio.service';


@Component({
  selector: 'app-import',
  templateUrl: './import.page.html',
  styleUrls: ['./import.page.scss'],
})
export class ImportPage implements OnInit {
  returnpath: string;
  filename: string;
  content: string;

  constructor(private fileChooser: FileChooser, private file: File, private filePath: FilePath, private audioservice: AudioService) { }

  ngOnInit() {

  }


  public file_click(){

    this.fileChooser.open().then((fileuri) => {
      this.filePath.resolveNativePath(fileuri).then((resolvednativepath) => {
        this.returnpath = resolvednativepath;
        this.filename = this.returnpath.substring(this.returnpath.lastIndexOf('/') + 1);
        // this.readfile(this.returnpath);
        fetch(this.returnpath).then(res => res.json()).then(json => {
          this.content = json;
          this.audioservice.preload('congratulations', 'assets/sounds/congratulations.mp3');
          this.audioservice.play('congratulations');
        });
      });
    });
  }
  //
/*
  public readfile(filePath) {
    ( <any> window).resolveLocalFileSystemURL(filePath, (res) => {
      res.file((resFile) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(resFile);
        reader.onloadend = (evt: any) => {
          const imgBlob = new Blob([evt.target.result], { type: 'image/jpeg'});
          // operations of the picture business code
        };
      });
    });
  }*/
}
