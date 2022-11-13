import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { View } from '../../view';
import '@vaadin/icon';
import '@vaadin/icons';

@customElement('home-view')
export class HomeView extends View {
  render() {
    return html`<style>
        [part='message'] {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100vh;
          padding-left: 1rem;
        }
        [part='recipient'] {
          border-radius: 0px 0px 20px 20px;
          height: 80px;
          background-color: var(--lumo-contrast-5pct);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1rem 1rem 1.5rem;
        }

        [part='recipient'] figure {
          width: 50px;
          height: 50px;
          overflow: hidden;
          background-color: rebeccapurple;
          border-radius: 100%;
        }
        [part='recipient'] figure img {
          object-position: center;
          width: 100%;
        }
        [part='sender'] {
          border-radius: 20px 20px 0px 0px;
          height: 80px;
          background-color: var(--lumo-contrast-5pct);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1rem 1rem 1.5rem;
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
        [part='cart'] {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          background-color: transparent;
          padding: 0.5rem 0.5rem 0.5rem 1.5rem;
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
        [part='icon'] {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 0.5rem;
        }
        [part='icon'] button {
          outline: none;
          border: none;
          background-color: transparent;
          color: var(--lumo-contrast-90pct);
          cursor: pointer;
        }

        [part='message-sender'] {
          width: 100%;
          padding: 0.5rem 1rem 0.5rem 1.5rem;
          position: relative;
        }
        [part='message-sender-input'] {
          min-width: 100%;
          border-radius: 20px;
          border: 0;
          padding: 0.85rem 2.5rem 0.85rem 0.85rem;
          background-color: var(--lumo-contrast-5pct);
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          color: var(--lumo-contrast-50pct);
          outline: none;
        }

        [part='message-sender'] vaadin-icon {
          position: absolute;
          top: 18px;
          right: 35px;
          font-size: 14px;
          color: var(--lumo-contrast-50pct);
        }
      </style>
      <div part="message">
        <header part="recipient">
          <div part="cart">
            <figure>
              <img src="" alt="Username" />
            </figure>
            <div part="content">
              <h1>Username</h1>
              <p>Click to view contact info</p>
            </div>
          </div>
          <div part="options">
            <button>
              <vaadin-icon icon="vaadin:search"></vaadin-icon>
            </button>
            <button>
              <vaadin-icon icon="vaadin:ellipsis-dots-v"></vaadin-icon>
            </button>
          </div>
        </header>
        <section part="sender">
          <div part="icon">
            <button>
              <vaadin-icon icon="vaadin:smiley-o"></vaadin-icon>
            </button>
            <button>
              <vaadin-icon icon="vaadin:paperclip"></vaadin-icon>
            </button>
          </div>
          <div part="message-sender">
            <vaadin-icon icon="vaadin:paperplane"></vaadin-icon>
            <input placeholder="Type message" type="text" part="message-sender-input" />
          </div>
        </section>
      </div>`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.classList.add('min-h-screen', 'block');
  }
}
