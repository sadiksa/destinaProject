import { Component, OnInit } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cookie-info',
  templateUrl: './cookie-info.component.html',
  styleUrls: ['./cookie-info.component.css']
})
export class CookieInfoComponent implements OnInit {

  constructor(
    public snackBarRef: MatSnackBarRef<CookieInfoComponent>,
  ) { }

  ngOnInit(): void {
  }
  reject(){
    localStorage.setItem("cookiePermission", "false")
    this.snackBarRef.dismiss()
  }
  accept(){
    localStorage.setItem("cookiePermission", "true")
    this.snackBarRef.dismiss()

  }

}
