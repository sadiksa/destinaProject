import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatModule } from '../chat/chat.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CrewComponent } from './crew/crew.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogContentComponent } from './blog/blog-content/blog-content.component';
import { PartnerComponent } from './partner/partner.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { CookieComponent } from './cookie/cookie.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CookieInfoComponent } from './components/cookie-info/cookie-info.component';

@NgModule({
  declarations: [
    PageComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CrewComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    BlogContentComponent,
    PartnerComponent,
    PrivacyComponent,
    CookieComponent,
    CookieInfoComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ChatModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule
  ]
})
export class PageModule { }
