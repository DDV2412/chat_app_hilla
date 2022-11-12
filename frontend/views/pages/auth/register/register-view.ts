import { View } from '../../../view';
import { customElement, state } from 'lit/decorators.js';
import { html } from 'lit';
import '@vaadin/text-field';
import '@vaadin/email-field';

@customElement('register-view')
export class RegisterView extends View {
  @state()
  private darkMode: Boolean = false;

  protected render(): unknown {
    return html`<style>
        [part='register'] {
          width: 100%;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        [part='form-register'] {
          background-color: var(--lumo-contrast-5pct);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25), -2px 2px 2px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          padding: 2rem;
          min-width: 50%;
        }

        @media (max-width: 640px) {
          [part='form-register'] {
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

        vaadin-text-field,
        vaadin-email-field {
          min-width: 100%;
        }

        form a {
          display: flex;
          min-width: 100%;
          font-weight: 500;
          justify-content: flex-end;
          margin-top: 0.5rem;
        }

        form a:hover {
          text-decoration: none;
        }

        form a:focus {
          color: var(--lumo-primary-color);
        }

        form button[part='submit'] {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          border: none;
          outline: none;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 17px;
          color: var(--lumo-base-color);
          background-color: var(--lumo-primary-color);
          min-width: 100%;
          margin: 0 auto;
          padding: 1rem 2rem;
          flex-direction: column;
          margin: 1.5rem 0 0;
          cursor: pointer;
        }

        p[part='connect'] {
          margin: 1rem 0;
          text-align: center;
        }
        [part='icons-connection'] {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          overflow: hidden;
        }
        [part='icons-connection'] a {
          padding: 10px 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
        [part='facebook'] {
          background-color: #1d4ed8;
        }
        [part='google'] {
          background-color: #b91c1c;
        }
        [part='github'] {
          background-color: #000;
        }

        [part='login'] {
          font-weight: 500;
        }
        [part='login']:hover {
          text-decoration: none;
        }
        [part='colspan'] {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.2rem;
        }
        [part='colspan'] vaadin-text-field {
          min-width: 48%;
        }

        @media (max-width: 640px) {
          [part='colspan'] {
            flex-direction: column;
          }
          [part='colspan'] vaadin-text-field {
            min-width: 100%;
          }
        }
      </style>
      <div part="register">
        <section part="form-register">
          <header>
            <img part="logo" src="/images/Logo.png" alt="UK-Project" />
            <h1>Let's Get Started!</h1>
            <p>Create an account to UK Project to get all featrues</p>
          </header>
          <form part="form">
            <vaadin-text-field label="Username" required> </vaadin-text-field>
            <div part="colspan">
              <vaadin-text-field label="First name" required> </vaadin-text-field>
              <vaadin-text-field label="Last name" required> </vaadin-text-field>
            </div>
            <vaadin-email-field label="Email address"></vaadin-email-field>
            <button part="submit">Register</button>
          </form>
          <p part="connect">Or connect using</p>
          <div part="icons-connection">
            <a href="" part="facebook">
              <img src="/icons/facebook.png" alt="Facebook" />
            </a>
            <a href="" part="google">
              <img src="/icons/google.png" alt="Google" />
            </a>
            <a href="" part="github">
              <img src="/icons/github.png" alt="GitHub" />
            </a>
          </div>
        </section>
        <p class="py-m">Already have an account? <a href="login" part="login"> Login Here</a></p>
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
