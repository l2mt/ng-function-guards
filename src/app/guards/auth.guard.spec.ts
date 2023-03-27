import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../core/auth.service';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    const routerMock = {
      navigate: () => {},
    };
    const authServiceMock = {
      isLogged: () => {},
    };

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: routerMock },
        { provide: AuthService, useValue: authServiceMock },
      ],
    });

    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should return true when user is logged in', () => {
    spyOn(authService, 'isLogged').and.returnValue(true);

    expect(authGuard.canActivate()).toBeTrue();
  });

  it('should return false and navigate to /login when user is not logged in', () => {
    spyOn(authService, 'isLogged').and.returnValue(false);
    spyOn(router, 'navigate');

    expect(authGuard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
