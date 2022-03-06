import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogContentComponent } from './blog/blog-content/blog-content.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { CrewComponent } from './crew/crew.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';
import { PartnerComponent } from './partner/partner.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {isChatOpened: false}
      },
      {
        path: 'crew',
        component: CrewComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'content/:id',
        component: BlogContentComponent
      },
      {
        path: 'partners',
        component: PartnerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
