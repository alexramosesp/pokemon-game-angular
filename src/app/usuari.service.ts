import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariService {
  // @ts-ignore
  private _jugador: string = 'Alex';
  private _score: string = ''

  get jugador(): string {
    return this._jugador;
  }

  set jugador(value: string) {
    this._jugador = value;
  }

  get score(): string {
    return this._score;
  }

  set score(value: string) {
    this._score = value;
  }

  getUser(jugador: string): string | null {
    // Lógica para obtener el usuario asociado al email desde localStorage
    // Devolverá null si no se encuentra el usuario
    return localStorage.getItem(jugador);
  }
  getScore(score: string): string | null {
    // Lógica para obtener el usuario asociado al email desde localStorage
    // Devolverá null si no se encuentra el usuario
    return localStorage.getItem(score);
  }
  validateCredentials(jugador: string, score: string): boolean {
    const storedPassword = localStorage.getItem(jugador);
    if (storedPassword !== null && storedPassword === score) {
      this._jugador = jugador; // Establecer el email actual
      return true;
    }
    return false;
  }

  logOut(): void {
    // Limpiar las credenciales al cerrar sesión
    this._jugador = '';
    this._score = '';
  }

  isLoggedIn(): boolean {
    return this._jugador !== '';
  }
}
