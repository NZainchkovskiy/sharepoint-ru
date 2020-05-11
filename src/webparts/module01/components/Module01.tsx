import * as React from "react";
import styles from "./Module01.module.scss";
import { IModule01Props } from "./IModule01Props";
import { escape } from "@microsoft/sp-lodash-subset";
import { Label, ILabelStyles } from "office-ui-fabric-react/lib/Label";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";

const Module01: React.FC<IModule01Props> = (props) => {
  return (
    <div className={styles.module01}>
      <div className={styles.container}>
        <Pivot aria-label="Basic Pivot Example">
          <PivotItem headerText="Page 1">
            <Page1 />
          </PivotItem>
          <PivotItem headerText="Page 2">
            <Page2 />
          </PivotItem>
          <PivotItem headerText="Page 3">
            <Page3 />
          </PivotItem>
        </Pivot>
      </div>
    </div>
  );
};
export default Module01;
