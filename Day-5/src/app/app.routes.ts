import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import ProductsComponent from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/account/login/login.component';
import { RegisterComponent } from './pages/account/register/register.component';
import { ProductEditComponent } from './pages/products/product-edit/product-edit/product-edit.component';
import { ProductAddComponent } from './pages/products/product-add/product-add.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'product',
        component: ProductsComponent
    },
    {
        path: 'product/add',
        component: ProductAddComponent
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent
    },
    
    {
        path: 'product/:id/edit',
        component: ProductEditComponent
    },
    {
        path: 'account',
        component: AccountComponent,
        children:[
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
        ]
    },
    {
        path: '**',
        component: NotFoundComponent
    },
];
