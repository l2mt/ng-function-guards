import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './core/auth.service';

const authGuardFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLogged()) {
    return true;
  }
  router.navigateByUrl('/login');
  return false;
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canActivate: [authGuardFn],
    loadComponent: () =>
      import('./components/admin/admin.component').then(
        (m) => m.AdminComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
