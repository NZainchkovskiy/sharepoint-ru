import * as React from "react";
import styles from "./Module01.module.scss";
import { IModule01Props } from "./IModule01Props";
import { escape } from "@microsoft/sp-lodash-subset";

const Module01: React.FC<IModule01Props> = (props) => {
  return (
    <div className={styles.module01}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.title}>Welcome to SharePoint!</span>
            <p className={styles.subTitle}>
              Customize SharePoint experiences using Web Parts.
            </p>
            <p className={styles.description}>{escape(props.description)}</p>
            <a href="https://aka.ms/spfx" className={styles.button}>
              <span className={styles.label}>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Module01;
