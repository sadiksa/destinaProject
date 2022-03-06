import { Component, OnInit } from '@angular/core';
import { IPartnerGroup, partners } from './partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {
  partners: IPartnerGroup[] = []
  constructor() {
    this.partners = partners

  }
  ngOnInit(): void {
  }

}
