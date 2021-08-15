import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth-area/login/login.component';
import { LogoutComponent } from './components/auth-area/logout/logout.component';
import { RegisterComponent } from './components/auth-area/register/register.component';
import { CutegoriesAreaComponent } from './components/cutegories-area/cutegories-area.component';
import { InventoryComponent } from './components/main-area/inventory/inventory.component';
import { MainComponent } from './components/main-area/main/main.component';
import { SearchComponent } from './components/main-area/search/search.component';
import { EditProductComponent } from './components/product-area/edit-product/edit-product.component';
import { NewProductComponent } from './components/product-area/new-product/new-product.component';
import { ProductDetailsComponent } from './components/product-area/product-details/product-details.component';
import { ProductListComponent } from './components/product-area/product-list/product-list.component';
import { EditWorkerComponent } from './components/workers-area/edit-worker/edit-worker.component';
import { NewWorkerComponent } from './components/workers-area/new-worker/new-worker.component';
import { WorkersDetailsComponent } from './components/workers-area/workers-details/workers-details.component';
import { WorkersListComponent } from './components/workers-area/workers-list/workers-list.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: "main", component: MainComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "search", component: SearchComponent },
  { path: "products/new", component: NewProductComponent },
  { path: "products/:id", component: ProductDetailsComponent },
  { path: "products/:id/edit",canActivate: [AuthGuard], component: EditProductComponent },
  { path: "products", component: ProductListComponent },
  { path: "workers/new", component: NewWorkerComponent },
  { path: "workers/:id", component: WorkersDetailsComponent },
  { path: "workers/:id/edit", canActivate: [AuthGuard], component: EditWorkerComponent },
  { path: "workers", canActivate: [AuthGuard], component: WorkersListComponent },
  { path: "register", component: RegisterComponent },
  { path: "login" , component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "cutegories", canActivate: [AuthGuard], component: CutegoriesAreaComponent },
  { path: "", redirectTo: "/main", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
