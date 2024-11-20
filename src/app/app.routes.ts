import { Routes } from '@angular/router';
import { MyFirstComponent } from './components/my-first/my-first.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: MyFirstComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },

  {
    path: 'contact/:username',
    component: ContactComponent,
  },
];
