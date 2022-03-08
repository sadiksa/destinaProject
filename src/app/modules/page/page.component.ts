import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieInfoComponent } from './components/cookie-info/cookie-info.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, AfterViewInit {
  cookiePermission: any
  constructor(
    private _snackBar: MatSnackBar
  ) {
    this.cookiePermission = localStorage.getItem("cookiePermission")
  }
  ngAfterViewInit(): void {
    console.log(this.cookiePermission);

    if (!this.cookiePermission) {
      this.openSnackBar()

    }
  }

  ngOnInit(): void {
  }
  openSnackBar() {
    this._snackBar.openFromComponent(CookieInfoComponent, {
      horizontalPosition: "left"
    });
  }

}
