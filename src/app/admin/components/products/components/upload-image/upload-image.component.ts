import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit, OnDestroy{

  @Output() public onUploadFinished = new EventEmitter();
  imagePath !: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("Destroy Upload Image Component")
  }


  public uploadFile = (files : any) => {
    if (files.length === 0) {
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imagePath = reader.result;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.onUploadFinished.emit(formData);
  }

}
