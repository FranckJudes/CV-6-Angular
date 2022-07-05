import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Output() intitule = new EventEmitter<string>();
  @Output() niveau= new EventEmitter<string>();
  constructor(a ? : string, b ? : string) { }

  ngOnInit(a ? : string, b ? : string): void {
  }
  onSubmit(f: NgForm) {
    this.intitule.emit(f.value['intitule']) ;
    this.niveau.emit(f.value['niveau'])
  }
}
