import { Route } from '@vaadin/router';
import { appStore } from './stores/app-store';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
  requiresLogin?: boolean;
};

export const hasAccess = (route: Route) => {
  const viewRoute = route as ViewRoute;
  if (viewRoute.requiresLogin && !appStore.loggedIn) {
    return false;
  }

  return true;
};

export const views: ViewRoute[] = [
  {
    component: 'home-view',
    title: 'Home',
    path: '',
    action: async () => {
      await import('./views/pages/home/home-view');
      return;
    },
  },
];
export const guest: ViewRoute[] = [
  {
    component: 'login-view',
    title: 'Login',
    path: 'login',
    action: async () => {
      await import('./views/pages/auth/login/login-view');
      return;
    },
  },
  {
    component: 'register-view',
    title: 'Register',
    path: 'register',
    action: async () => {
      await import('./views/pages/auth/register/register-view');
      return;
    },
  },
  {
    component: 'notice-view',
    title: 'Email Verify Notice',
    path: 'verify-notice',
    action: async () => {
      await import('./views/pages/auth/notice/notice-view');
      return;
    },
  },
  {
    component: 'email-view',
    title: 'Email',
    path: 'email',
    action: async () => {
      await import('./views/pages/auth/email/email-view');
      return;
    },
  },
  {
    component: 'forgot-password-view',
    title: 'Forgot Password',
    path: 'forgot-password',
    action: async () => {
      await import('./views/pages/auth/forgot-password/forgot-password-view');
      return;
    },
  },
  {
    component: 'setup-password-view',
    title: 'Set up Password',
    path: 'setup-password',
    action: async () => {
      await import('./views/pages/auth/setup-password/setup-password-view');
      return;
    },
  },
  {
    component: 'reset-password-view',
    title: 'Reset Password',
    path: 'reset-password/:token',
    action: async () => {
      await import('./views/pages/auth/reset-password/reset-password-view');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    component: 'main-layout',
    path: '',
    requiresLogin: true,
    action: async () => {
      await import('./views/layout/main-layout');
      return;
    },
    children: [...views],
  },
  {
    component: 'guest-layout',
    path: '',
    action: async () => {
      await import('./views/layout/guest-layout');
      return;
    },
    children: [...guest],
  },
];
