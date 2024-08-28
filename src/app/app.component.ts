import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imageUpload';
  imageUrl = '';

  constructor(private fireStorage: AngularFireStorage) {
    
  }

  async onFileChange(event:any) {
    const file = event.target.files[0];
    if(file) {
      console.log(file);
      const path = `image/${file.name}`;
      const uploadTask = await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL();
      this.imageUrl = url
    }
  }
}
