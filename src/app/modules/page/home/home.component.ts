import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ChatComponent } from '../../chat/chat/chat.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger(
      'enabledStateChange', [
      state(
        'default',
        style({
          border: "1px solid #003b77"
        })
      ),
      state(
        'disabled',
        style({
          border: "1px solid #dee2e6"
        })
      ),
      transition(
        '* => *', [
        animate('200ms ease-in', style({ transform: 'scale(1.1' })),
        animate('200ms ease-in', style({ transform: 'scale(1' })),
        animate('300ms'),
      ]
      )
    ]
    )
  ]
})
export class HomeComponent implements OnInit {
  @ViewChild("button")
  button!: ElementRef;
  chatOpened = false
  trueFalse = false

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    window.setInterval(()=>{
      this.trueFalse = !this.trueFalse
    }, 5000);
  }
  close(e: boolean) {
    if (e) {
      this.chatOpened = false
    }
  }
  goToBottom() {
    let element = document.getElementById("scroll")
    element?.scrollIntoView();
  }
  openDialog() {
    let dialogConfig: MatDialogConfig
    if (window.innerWidth<600) {
      dialogConfig = {
        minWidth: "100%",
        position: {
          bottom: "10px",
          right: "10px"
        }
      }
    } else {
      dialogConfig = {
        minWidth: "400px",
        maxWidth: "600px",
        position: {
          bottom: "10px",
          right: "10px"
        }
      }
    }
    const dialogRef = this.dialog.open(ChatComponent, dialogConfig);
    this.chatOpened = true
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.chatOpened = false

    });
  }
  
  

}
