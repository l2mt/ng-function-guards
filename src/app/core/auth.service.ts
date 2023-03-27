import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('currentUser')!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public isLogged(): boolean {
    return this.currentUserSubject.value !== null;
  }

  login(username: string, password: string) {
    if (password !== '') {
      const userData = JSON.stringify({ username });
      localStorage.setItem('currentUser', userData);
      this.currentUserSubject.next(username);
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
