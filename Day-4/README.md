# Day4
## Routing
-- app.routes.ts:
```
// object
    export routes: Routes = [
        // route pages in its order
        {
            path: '', 
            // component: HomeComponent,
            redirectTo: 'home', // go back to home auto
            pathMath: 'full'

        },
        {
            path: 'home', // route
            component: HomeComponent, // component
        },
        {
            path: 'product/:id',
            component: ProductComponent,
        }
    ]
```
-- app.component.ts:
```
    @Component{
        // Nav static, else dynamic
        imports: [Navbar, RouterOutlet]
    }
```
-- app.component.html:
```
    <app-header/>
    <router-outlet/>
```

-- navbar.component.ts:
```
    @Component{
        imports: [
            RouterLink, // Link the route with element
            RouterLinkActive, // Give style to the element when activate
        ]
    }
```
-- navbar.component.html:
```
    <ul>
        <li><a [routerLink] = ['/home'] [routerLinkActive] = 'style-when-active-route' >Home</a></li> 
        <li><a [routerLink] = ['/product']>Products</a></li>
        <li><a [routerLink] = ['/product', 3]>Add Product</a></li> // (/product/3)
        // <li><a [routerLink] = ['/product/3']>Add Product</a></li>

        <li>
            <a 
                [routerLink] = "['/product']" 
                routerLinkActive = 'style-when-active-route' 
                [routerLinkActiveOptions] = '{exact: true}' <!-- Makes '/product' != '/product/3' using KEYWORD {exact}-->
            >Products</a>
        </li>
    </ul>
```
-- navbar.component.
```
```