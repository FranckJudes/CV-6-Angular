import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  @Output() intitule = new EventEmitter<string>();
  @Output() niveau= new EventEmitter<string>();
  intu:string="";
  niv:string="";
  constructor(a ? : string, b ? : string) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    this.intitule.emit(f.value['intitule']) ;
    this.niveau.emit(f.value['niveau'])
  }

}
