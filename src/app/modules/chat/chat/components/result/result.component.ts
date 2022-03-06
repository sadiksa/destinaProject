import { Component, Input, OnInit } from '@angular/core';
import { Organization, OrganizationGroup } from '../../../models/organizationsDbModel';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()
  organizationGroup!: OrganizationGroup | null;

  constructor() { }

  ngOnInit(): void {
  }

}
