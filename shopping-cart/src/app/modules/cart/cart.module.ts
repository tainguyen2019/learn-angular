import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';

const routes: Routes = [
  { path: '', component: CartPageComponent },
];

@NgModule({
  declarations: [CartComponent, CartPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CartModule { }
