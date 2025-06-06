import { Routes } from '@angular/router';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home }
    /* { path: 'multiple-options', component: MultipleOptionsComponent },
    { path: 'single-option', component: SingleOptionsComponent }, */
];