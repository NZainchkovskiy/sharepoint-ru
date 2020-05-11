import * as React from "react";
import styles from "./Module02.module.scss";
import { IModule02Props } from "./IModule02Props";
import {
  Pivot,
  PivotItem,
  PivotLinkFormat,
} from "office-ui-fabric-react/lib/Pivot";
import { Page1 } from "../../../shared/components/Page1";
import { Page2 } from "../../../shared/components/Page2";
import { Page3 } from "../../../shared/components/Page3";

const Module02: React.FC<IModule02Props> = (props) => {
  return (
    <div className={styles.module02}>
      <div className={styles.container}>
        <Pivot
          aria-label="Basic Pivot Example"
          linkFormat={PivotLinkFormat.tabs}
        >
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
export default Module02;
