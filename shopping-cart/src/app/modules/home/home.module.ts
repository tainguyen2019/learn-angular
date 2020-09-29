import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './components/list-product/list-product.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  { path: 'list-product', component: HomeComponent },
  { path: '', redirectTo: 'list-product', pathMatch: 'full' },
];

@NgModule({
  declarations: [WelcomeComponent, ListProductComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class HomeModule { }
