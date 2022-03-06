import { Component, OnInit } from '@angular/core';
import { crew, ICrew, ICrewGroup } from './crew';



@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew: ICrewGroup[] = []

  constructor() { 
    this.crew = crew
  }

  ngOnInit(): void {
  }

}
