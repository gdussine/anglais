import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File } from '@ionic-native/file/ngx';


@Component({
  selector: 'app-import',
  templateUrl: './import.page.html',
  styleUrls: ['./import.page.scss'],
})
export class ImportPage implements OnInit {
  returnpath: string;
  filename: string;

  constructor(private fileChooser: FileChooser, private file: File, private filePath: FilePath) { }

  ngOnInit() {

  }

  public file_click(){

    this.fileChooser.open().then((fileuri) => {
      this.filePath.resolveNativePath(fileuri).then((resolvednativepath) => {
        this.returnpath = resolvednativepath;
        this.filename = this.returnpath.substring(this.returnpath.lastIndexOf('/') + 1);
      });
    });
  }
}
