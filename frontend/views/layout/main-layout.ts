import { customElement, state } from 'lit/decorators.js';
import { html } from 'lit';
import { Layout } from '../view';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/text-field';
@customElement('main-layout')
export class MainLayout extends Layout {
  @state()
  private darkMode: Boolean = false;

  render() {
    return html`<style>
        [part='sidebar'] {
          position: fixed;
          z-index: 50;
          top: 0;
          bottom: 0;
          min-height: 100vh;
          min-width: 386px;
          background-color: var(--lumo-contrast-5pct);
          border-radius: 0px 20px 20px 0px;
        }
        [part='main'] {
          padding-left: 386px;
        }
        [part='header'] {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1rem 1rem 1.5rem;
        }

        [part='header'] figure {
          width: 50px;
          height: 50px;
          overflow: hidden;
          background-color: rebeccapurple;
          border-radius: 100%;
        }
        [part='header'] figure img {
          object-position: center;
          width: 100%;
        }
        [part='search'] {
          width: 100%;
          padding: 0.5rem 1rem 0.5rem 1.5rem;
          position: relative;
        }
        [part='search-input'] {
          min-width: 100%;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15), -2px 0px 2px rgba(0, 0, 0, 0.15);
          border-radius: 20px;
          border: 0;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          background-color: var(--lumo-contrast-5pct);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          color: var(--lumo-contrast-50pct);
          outline: none;
        }
        [part='options'] {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 0.5rem;
        }
        [part='options'] button {
          outline: none;
          border: none;
          background-color: transparent;
          color: var(--lumo-contrast-90pct);
          cursor: pointer;
        }
        [part='user'] {
          margin: 1rem 0;
        }
        [part='user'] figure {
          width: 50px;
          height: 50px;
          overflow: hidden;
          background-color: rebeccapurple;
          border-radius: 100%;
        }
        [part='cart'] {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          background-color: transparent;
          padding: 0.5rem 0.5rem 0.5rem 1.5rem;
        }

        [part='cart']:hover {
          background-color: var(--lumo-contrast-10pct);
        }

        [part='cart']:focus {
          background-color: var(--lumo-contrast-10pct);
        }
        [part='cart'] h1 {
          font-weight: 500;
          font-size: 16px;
          line-height: 17px;
          margin: 0;
        }
        [part='cart'] p {
          font-size: 14px;
          line-height: 15px;
          margin: 0.5rem 0 0;
          color: var(--lumo-contrast-50pct);
        }
        [part='search'] vaadin-icon {
          position: absolute;
          top: 18px;
          left: 35px;
          font-size: 14px;
          color: var(--lumo-contrast-50pct);
        }
      </style>
      <div>
        <aside part="sidebar">
          <header part="header">
            <figure>
              <img src="" alt="Username" />
            </figure>
            <div part="options">
              <button @click="${this._changeTheme}">
                <vaadin-icon icon="vaadin:moon"></vaadin-icon>
              </button>
              <button>
                <vaadin-icon icon="vaadin:comment-ellipsis"></vaadin-icon>
              </button>
              <button>
                <vaadin-icon icon="vaadin:ellipsis-dots-v"></vaadin-icon>
              </button>
            </div>
          </header>
          <div part="search">
            <vaadin-icon icon="vaadin:search"></vaadin-icon>
            <input placeholder="Find or start a new chat" type="search" part="search-input" />
          </div>
          <div part="user">
            <div part="cart">
              <figure>
                <img src="" alt="Username" />
              </figure>
              <div part="content">
                <h1>Username</h1>
                <p>Last Message</p>
              </div>
            </div>
          </div>
        </aside>
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
