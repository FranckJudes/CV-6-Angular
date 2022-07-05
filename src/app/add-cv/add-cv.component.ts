import { Component, OnInit } from '@angular/core';
/*import { CvModel } from '../model/cv.model';
import { FormationModel } from '../model/Formation.model';
import { ExperienceModel } from '../model/Experience.model';
import { CompetenceModel } from '../model/Competence.model';
import { LanguageModel } from '../model/Language.model';
import { FormArray, FormBuilder, FormControl, FormGroup,NgForm,Validator, Validators } from '@angular/forms';
import { AddCvService } from '../service/addCv.service';*/
import { ExperienceComponent } from '../experience/experience.component';
import { FormationComponent } from '../formation/formation.component';
import { LangueComponent } from '../langue/langue.component';
import { CompetanceComponent } from '../competance/competance.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {
  langues: [LangueComponent] = [new LangueComponent("ksj","kj")];
  competences: [CompetanceComponent] = [new CompetanceComponent("ksj","kj")];
  experiences: [ExperienceComponent] = [new ExperienceComponent("ksj","kj")];
  formations: [FormationComponent] = [new FormationComponent("ksj","kj")];


  langue !:LangueComponent;
  forma:boolean=true;
  intitule!:string;
  niveau!:string;


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
 }

 addCompetence(){
   console.log(this.competences);

   this.competences.push(new CompetanceComponent(this.intitule, this.niveau));
 
 }


 addExperience(){
   console.log(this.competences);

   this.experiences.push(new ExperienceComponent(this.intitule, this.niveau));
 
 }


 addLangue(){
   console.log(this.competences);

   this.langues.push(new LangueComponent(this.intitule, this.niveau));
 
 }
 addFormation(){
   console.log(this.formations);

   this.formations.push(new FormationComponent(this.intitule, this.niveau));
 
 }

 

 addItem(newItem: string) {
  console.log(newItem);
 }

}
