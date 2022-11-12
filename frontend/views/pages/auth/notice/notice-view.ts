import { View } from '../../../view';
import { customElement, state } from 'lit/decorators.js';
import { html } from 'lit';

@customElement('notice-view')
export class NoticeView extends View {
  @state()
  private darkMode: Boolean = false;

  protected render(): unknown {
    return html`<style>
        [part='verify'] {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        [part='verify-notice'] {
          background-color: var(--lumo-contrast-5pct);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25), -2px 2px 2px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          padding: 2rem;
          min-width: 50%;
        }

        @media (max-width: 640px) {
          [part='verify-notice'] {
            min-width: 100%;
          }
        }
        [part='logo'] {
          max-width: 8rem;
        }

        header h1 {
          font-weight: 700;
          font-size: 24px;
          line-height: 29px;
        }

        header p {
          font-weight: 400;
          opacity: 0.8;
        }

        [part='register'] {
          font-weight: 500;
        }
        [part='register']:hover {
          text-decoration: none;
        }

        [part='verify-notice'] button {
         border: none;
          outline: none;
          font-family: 'Montserrat';
          font-weight: 600;
          color: var(--lumo-primary-color);
          cursor: pointer;
          padding: 0;
           cursor: pointer;
        }


      </style>
      <div part="verify">
        <section part="verify-notice">
          <header>
            <img part="logo" src="/images/Logo.png" alt="UK-Project" />
            <h1>We've send you an email</h1>
            <p>Please check your inbox at <strong>sample@mail.com</strong></p>
          </header>
          <p>The email contains a link to verify your email address and active your UK Project account.</p>

          <div class="mt-l">
            <strong>
              Didn't get the email?</strong>
              <br/>
              <span><button>Resend verification email</button> (and remember to check your junk or spam folder, to)</span>
            </p>
          </div>
        </section>
      </div>`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.classList.add('min-h-screen', 'block');
    this._updateDarkMode();
  }

  _updateDarkMode(): void {
    if (this.darkMode) {
      this.setAttribute('theme', 'dark');
    } else {
      this.setAttribute('theme', 'light');
    }
  }
}
