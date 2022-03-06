import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import {MatButtonModule} from '@angular/material/button';
import { ResultComponent } from './chat/components/result/result.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BottomResultComponent } from './chat/components/bottom-result/bottom-result.component';

@NgModule({
  declarations: [
    ChatComponent,
    ResultComponent,
    BottomResultComponent,
    
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule    
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
