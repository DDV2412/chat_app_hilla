import { View } from '../../../view';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import '@vaadin/email-field';
import '@vaadin/icon';
import '@vaadin/icons';

@customElement('forgot-password-view')
export class ForgotPasswordView extends View {
  protected render(): unknown {
    return html`<style>
        [part='forgot'] {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        [part='form-forgot'] {
          background-color: var(--lumo-contrast-5pct);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25), -2px 2px 2px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          padding: 2rem;
          min-width: 50%;
        }

        @media (max-width: 640px) {
          [part='form-forgot'] {
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

        vaadin-email-field {
          min-width: 100%;
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
      </style>
      <div part="forgot">
        <section part="form-forgot">
          <header>
            <img part="logo" src="/images/Logo.png" alt="UK-Project" />
            <h1>Forgot Password?</h1>
            <p>Enter the email address associated with your account</p>
          </header>
          <form part="form">
            <vaadin-email-field label="Email" required> </vaadin-email-field>
            <button part="submit">Send Reset Link</button>
          </form>
        </section>
      </div>`;
  }
}
