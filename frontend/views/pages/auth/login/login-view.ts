import { LoginResult } from '@hilla/frontend';
import '@vaadin/icon';
import '@vaadin/icons';
import '@vaadin/password-field';
import '@vaadin/text-field';
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { login } from '../../../auth';
import { View } from '../../../view';
import { RouterLocation } from '@vaadin/router';
import { Notification } from '@vaadin/notification';
import { Binder, field } from '@hilla/form';
import UserDataModel from 'Frontend/generated/com/example/application/dto/UserDataModel';

@customElement('login-view')
export class LoginView extends View {
  @state()
  private error = false;

  private returnUrl?: string;

  private onSuccess = (result: LoginResult) => {
    window.location.href = result.redirectUrl || this.returnUrl || result.defaultUrl || '/';
  };

  private binder = new Binder(this, UserDataModel);

  protected render(): unknown {
    const { model } = this.binder;
    return html`<style>
        [part='login'] {
          width: 100%;
          min-height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          font-family: 'Montserrat', sans-serif;
        }

        [part='form-login'] {
          background-color: var(--lumo-contrast-5pct);
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25), -2px 2px 2px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          padding: 2rem;
          min-width: 50%;
        }

        @media (max-width: 640px) {
          [part='form-login'] {
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
        vaadin-password-field {
          min-width: 100%;
          font-family: 'Montserrat', sans-serif;
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

        [part='register'] {
          font-weight: 500;
        }
        [part='register']:hover {
          text-decoration: none;
        }
      </style>
      <div part="login">
        <section part="form-login">
          <header>
            <img part="logo" src="/images/Logo.png" alt="UK-Project" />
            <h1>Welcome back!</h1>
            <p>Log in to your existant account of UK Project</p>
          </header>
          <form part="form" @submit="${this.login}">
            <vaadin-text-field label="Username" ${field(model.userName)}> </vaadin-text-field>
            <vaadin-password-field label="Password" ${field(model.password)}></vaadin-password-field>
            <a href="forgot-password">Forgot Password</a>
            <button part="submit" ?disabled="${this.binder.invalid || this.binder.submitting}">Login</button>
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
        <p class="py-m">Don’t have an account? <a href="register" part="register">Sign Up</a></p>
      </div>`;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.classList.add('min-h-screen', 'block');
  }

  async login(e: CustomEvent): Promise<LoginResult> {
    e.preventDefault();

    let userName = this.binder.value.userName;
    let password = this.binder.value.password;

    this.error = false;
    const result = await login(String(userName), String(password));
    this.error = result.error;

    if (!result.error) {
      this.onSuccess(result);
    } else {
      Notification.show(String(result.errorMessage), {
        position: 'top-end',
      }).setAttribute('theme', 'error');
    }

    return result;
  }

  onAfterEnter(location: RouterLocation) {
    this.returnUrl = location.redirectFrom;
  }
}
