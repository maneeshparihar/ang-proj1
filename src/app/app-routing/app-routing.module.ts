import { HomeComponent } from './../home/home.component';
import { TestpaperComponent } from './../testpaper/testpaper.component';
import { QBankComponent } from './../q-bank/q-bank.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ResultComponent } from '../result/result.component';

// import { CommonModule } from '@angular/common';


const appRoutes: Routes = [
  {path: 'qbank', component: QBankComponent},
  {path: 'test', component: TestpaperComponent},
  {path: 'result', component: ResultComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo:'/', pathMatch:'full'}
  // {path: '', redirectTo: '/home', pathMatch: 'full'}

];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
