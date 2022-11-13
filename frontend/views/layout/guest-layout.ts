import { customElement, state } from 'lit/decorators.js';
import { html } from 'lit';
import { Layout } from '../view';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/text-field';

@customElement('guest-layout')
export class GuestLayout extends Layout {
  @state()
  private darkMode: Boolean = false;

  render() {
    return html` <div>
      <div part="darkButton">
        <button @click="${this._changeTheme}">
          <vaadin-icon icon="vaadin:moon"></vaadin-icon>
        </button>
      </div>
      <main part="main"><slot></slot></main>
    </div>`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.classList.add('min-h-screen', 'block');
    this._updateDarkMode();
  }

  private _updateDarkMode(): void {
    let theme: string | null = localStorage.getItem('theme');

    if (!theme) {
      localStorage.setItem('theme', 'light');
    }

    if (this.darkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }

    theme = localStorage.getItem('theme');

    if (theme) {
      this.setAttribute('theme', theme);
    }
  }

  private _changeTheme(): void {
    this.darkMode = !this.darkMode;

    this._updateDarkMode();
  }
}
