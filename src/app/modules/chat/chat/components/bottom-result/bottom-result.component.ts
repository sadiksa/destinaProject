import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Organization } from '../../../models/organizationsDbModel';

@Component({
  selector: 'app-bottom-result',
  templateUrl: './bottom-result.component.html',
  styleUrls: ['./bottom-result.component.css']
})
export class BottomResultComponent implements OnInit {
  organization!: Organization
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
     private bottomSheetRef: MatBottomSheetRef<BottomResultComponent>
  ) { 
    this.organization = data.organization
  }

  ngOnInit(): void {
    
  }
  encode(str: string){
    return encodeURI(str)
  }

}
