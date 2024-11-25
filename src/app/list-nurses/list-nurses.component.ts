import { Component } from '@angular/core';


@Component({
  selector: 'app-list-nurses',
  standalone: false,
  templateUrl: './list-nurses.component.html',
  styleUrl: './list-nurses.component.css'
})

export class ListNursesComponent {

  enfermeros = [
    ["Pepe54", "1234wsd", "Pepe"],
    ["Pepe55", "1234wsd", "Pepe"],
    ["PacoPlanchas", "patata", "Paco"],
    ["PepitaLoca", "firulay", "Pepita"],
    ["BenitoElGuay", "austrolopitecus", "Benito"]
  ];

}











