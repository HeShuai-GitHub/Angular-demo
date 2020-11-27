
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormMVVMComponent} from  './components/form-mvvm/form-mvvm.component';
import {LogicComponent} from './components/logic/logic.component';
import {NewsComponent} from './components/news/news.component';
import {NewDetailComponent} from './components/new-detail/new-detail.component';
import {NewsDetailDynamicComponent} from './components/news-detail-dynamic/news-detail-dynamic.component';
import { FCRouterComponent } from './components/f-c_router/f-c-router.component';
import { FRouterComponent } from './components/f-c_router/f_router/f-router.component';
import { CRouterComponent } from './components/f-c_router/c_router/c-router.component';
import { COneDetailComponent } from './components/f-c_router/c_router/c-one-detail/c-one-detail.component';
import { CTwoDetailComponent } from './components/f-c_router/c_router/c-two-detail/c-two-detail.component';
import { FTwoDetailComponent } from './components/f-c_router/f_router/f-two-detail/f-two-detail.component';
import { FOneDetailComponent } from './components/f-c_router/f_router/f-one-detail/f-one-detail.component';

const routes: Routes = [
  {
    path: 'mvvm', component: FormMVVMComponent
  },
  {
    path: 'logic', component: LogicComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'newsDetail', component: NewDetailComponent
  },
  {
    path: 'newsDetailDynamic/:sid', component: NewsDetailDynamicComponent
  },
  {
    path: 'fc_router', component: FCRouterComponent,
    children: [
      {
        path: 'f_router', component: FRouterComponent,
        children: [
          {path: 'f_one', component: FOneDetailComponent},
          {path: 'f_two', component: FTwoDetailComponent}
        ]
      },
      {
        path: 'c_router', component: CRouterComponent,
        children: [
          {path: 'c_one', component: COneDetailComponent},
          {path: 'c_two', component: CTwoDetailComponent}
        ]
      }
    ]
  },
  {
    path: '**', redirectTo: '/fc_router'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
