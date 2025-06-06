import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { MultipleOptions } from './components/multiple-options/multiple-options';
import { OneOption } from './components/one-option/one-option';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'multiple-options', component: MultipleOptions},
    { path: 'one-option', component: OneOption }
];