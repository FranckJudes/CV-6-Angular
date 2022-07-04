import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
 // form:FormGroup;
//color='cyan';
  constructor() { }
 /*   this.form = formBuilder.group({
      theme : this.color
    })
    this.form.valueChanges.subscribe(data =>{
      this.color = data.theme
      console.log('For changes',data)
    })
  }
  
*/
  ngOnInit(): void {
  }

}
