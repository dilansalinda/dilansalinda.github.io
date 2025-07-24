import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private storageKey = 'isDarkMode';

  constructor() {
    const isDark = localStorage.getItem(this.storageKey) === 'true';
    this.setDarkMode(isDark);
  }

  toggleDarkMode(): void {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem(this.storageKey, isDark.toString());
  }

  setDarkMode(isDark: boolean): void {
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem(this.storageKey, isDark.toString());
  }
}