import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedFile: File = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('', fd)
    .subscribe(res => {
      console.log(res);
    })
  }
}

form: FormGroup ;
  color = 'cyan';

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      theme: this.color
    })
    
    this.form.valueChanges.subscribe(data => {
      this.color = data.theme
      console.log('Form changes', data)
    })
  }




