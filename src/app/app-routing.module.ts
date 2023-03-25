import { inject, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './core/auth.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [
      () => {
        const authService = inject(AuthService);
        const router = inject(Router);
        if (authService.isLogged()) {
          return true;
        } else {
          router.navigate(['/login']);
          return false;
        }
      },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
