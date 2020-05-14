import * as React from "react";
import styles from "./Module03.module.scss";
import { IModule03Props } from "./IModule03Props";
import { escape } from "@microsoft/sp-lodash-subset";
import { ThemeProvider } from "styled-components";

export default class Module03 extends React.Component<IModule03Props, {}> {
  public render(): React.ReactElement<IModule03Props> {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div className={styles.module03}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Welcome to SharePoint!</span>
                <p className={styles.subTitle}>
                  Customize SharePoint experiences using Web Parts.
                </p>
                <p className={styles.description}>
                  {escape(this.props.description)}
                </p>
                <a href="https://aka.ms/spfx" className={styles.button}>
                  <span className={styles.label}>Learn more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
