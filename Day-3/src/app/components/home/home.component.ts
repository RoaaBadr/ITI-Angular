import { Component } from '@angular/core';

import { HeroComponent } from './home-components/hero/hero.component';
import { AboutComponent } from './home-components/about/about.component';
import { ServicesComponent } from './home-components/services/services.component';
import { TestimonialsComponent } from './home-components/testimonials/testimonials.component';
import { ContactComponent } from './home-components/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [    
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
