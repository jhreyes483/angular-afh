import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    /** carga de rutas hijas */
    // https://www.udemy.com/course/angular-fernando-herrera/learn/lecture/37397546#overview
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
