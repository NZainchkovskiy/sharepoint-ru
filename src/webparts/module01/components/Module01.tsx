import * as React from "react";
import styles from "./Module01.module.scss";
import { IModule01Props } from "./IModule01Props";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import { Page1 } from "../../../shared/components/Page1";
import { Page2 } from "../../../shared/components/Page2";
import { Page3 } from "../../../shared/components/Page3";

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
