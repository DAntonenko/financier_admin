import * as React from 'react';
import './admin-panel.css';
import { Button } from '../../components/controls/button/button';

export enum EVisibleTab {
  USERS = 0,
  ACCOUNTS_MONITORING = 1,
  LEGAL_ENTITIES_LIST = 2,
}

interface IAdminPanelState {
  visibleTab: EVisibleTab;
}

export class AdminPanel extends React.Component<IAdminPanelState> {

  public state: IAdminPanelState = {
    visibleTab: EVisibleTab.USERS
  }

  public render() {
    return (
      <div className='admin-panel'>
        <header className='admin-panel__header'>
          <nav className='admin-panel__main-navigation'>
            <p
              className='admin-panel__main-navigation-tab'
              onClick={this.onNavTabClick}
            >
              Пользователи
            </p>
            <p
              className='admin-panel__main-navigation-tab'
            >
              Мониторинг аккаунтов
            </p>
            <p
              className='admin-panel__main-navigation-tab'
            >
              Список юрлиц аккаунта
            </p>
          </nav>
        </header>
        <main className='admin-panel__main-content'>
          {this.state.visibleTab = EVisibleTab.ACCOUNTS_MONITORING ? <p>МОНЯ</p>: <p></p>}
        </main>
      </div>
    );
  }

  private onNavTabClick = () => {
    this.setState({
      visibleTab: EVisibleTab.ACCOUNTS_MONITORING
    });
  }
}
