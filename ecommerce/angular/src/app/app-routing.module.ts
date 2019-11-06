import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { SalesComponent } from './sales/sales.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"categories", component: CategoriesComponent},
  {path:"login", component: LoginComponent},
  {path:"products", component: ProductsComponent},
  {path:"sales", component: SalesComponent},
  {path:"users", component: UsersComponent},
  {path:"register", component: RegisterComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
