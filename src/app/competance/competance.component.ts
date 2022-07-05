import { Component, OnInit } from '@angular/core';
import { LanguageModel } from 'src/app/model/Language.model';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-competance',
  templateUrl: './competance.component.html',
  styleUrls: ['./competance.component.css']
})
@Output() intitule = new EventEmitter<string>();
@Output() niveau= new EventEmitter<string>();
intu:string="";
niv:string="";
// @Output() langue = new EventEmitter<LanguageModel>();
export class CompetanceComponent implements OnInit {

  constructor(a ? : string, b ? : string) { }

  ngOnInit(): void {
  }
  addNewItem(value: string) {
    // this.niveau.emit(value);
  }

  onSubmit(f: NgForm) {
   this.intitule.emit(f.value['intitule']) ;
   this.niveau.emit(f.value['niveau'])
 }

}
