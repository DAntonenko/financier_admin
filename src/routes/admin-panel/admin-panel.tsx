import * as React from 'react';
import './admin-panel.css';
import { Button } from '../../components/controls/button/button';
import { mergeClassNames } from '../../utils/merge-class-names/merge-class-names';

export enum EVisibleTab {
  USERS = 0,
  ACCOUNTS_MONITORING = 1,
  LEGAL_ENTITIES_LIST = 2,
}

interface IAdminPanelState {
  visibleTab: EVisibleTab;
}

export class AdminPanel extends React.Component<{}, IAdminPanelState> {

  public state: IAdminPanelState = {
    visibleTab: EVisibleTab.USERS
  }

  public render() {
    return (
      <div className='admin-panel'>
        <header className='admin-panel__header'>
          <p className='admin-panel__symbol'>A</p>
          <nav className='admin-panel__main-navigation'>
            <p
              className={mergeClassNames([
                'admin-panel__main-navigation-tab',
                this.state.visibleTab === EVisibleTab.USERS ? 'admin-panel__main-navigation-tab--active' : '',
              ])}
              id='users-tab'
              onClick={this.onNavTabClick}
            >
              Пользователи
            </p>
            <p
              className={mergeClassNames([
                'admin-panel__main-navigation-tab',
                this.state.visibleTab === EVisibleTab.ACCOUNTS_MONITORING ? 'admin-panel__main-navigation-tab--active' : '',
              ])}
              id='accounts-monitoring-tab'
              onClick={this.onNavTabClick}
            >
              Мониторинг аккаунтов
            </p>
            <p
              className={mergeClassNames([
                'admin-panel__main-navigation-tab',
                this.state.visibleTab === EVisibleTab.LEGAL_ENTITIES_LIST ? 'admin-panel__main-navigation-tab--active' : '',
              ])}
              id='legal-entities-list-tab'
              onClick={this.onNavTabClick}
            >
              Список юрлиц аккаунта
            </p>
          </nav>
        </header>
        <main className='admin-panel__main-content'>
          {this.state.visibleTab === EVisibleTab.USERS && <p>УСЁР</p>}
          {this.state.visibleTab === EVisibleTab.ACCOUNTS_MONITORING && <p>МОНЯ</p>}
          {this.state.visibleTab === EVisibleTab.LEGAL_ENTITIES_LIST && <p>ЛЫЦЫ</p>}
        </main>
      </div>
    );
  }

  private onNavTabClick = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    switch (event.currentTarget.id) {
      case 'users-tab':
        this.setState({visibleTab: EVisibleTab.USERS});
        break;
      case 'accounts-monitoring-tab':
        this.setState({visibleTab: EVisibleTab.ACCOUNTS_MONITORING});
        break;
      case 'legal-entities-list-tab':
        this.setState({visibleTab: EVisibleTab.LEGAL_ENTITIES_LIST});
        break;
      default:
        this.setState({visibleTab: EVisibleTab.USERS});
        break;
    }
  }
}
