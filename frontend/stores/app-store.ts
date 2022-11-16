import { RouterLocation } from '@vaadin/router';
import UserDataModel from 'Frontend/generated/com/example/application/dto/UserDataModel';
import { UserController } from 'Frontend/generated/endpoints';
import { makeAutoObservable } from 'mobx';

export class AppStore {
  applicationName = 'Chat App';

  location = '';

  currentViewTitle = '';

  user: UserDataModel | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  setLocation(location: RouterLocation) {
    const serverSideRoute = location.route?.path == '(.*)';
    if (location.route && !serverSideRoute) {
      this.location = location.route.path;
    } else if (location.pathname.startsWith(location.baseUrl)) {
      this.location = location.pathname.substr(location.baseUrl.length);
    } else {
      this.location = location.pathname;
    }
    if (serverSideRoute) {
      this.currentViewTitle = document.title; // Title set by server
    } else {
      this.currentViewTitle = (location?.route as any)?.title || '';
    }
  }

  async fetchUserInfo() {
    this.user = await UserController.getAuthenticationUser();
  }

  clearUserInfo() {
    this.user = undefined;
  }

  get loggedIn() {
    return !!this.user;
  }
}

export const appStore = new AppStore();
