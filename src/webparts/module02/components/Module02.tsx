import * as React from 'react';
import styles from './Module02.module.scss';
import { IModule02Props } from './IModule02Props';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Module02 extends React.Component<IModule02Props, {}> {
  public render(): React.ReactElement<IModule02Props> {
    return (
      <div className={ styles.module02 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
