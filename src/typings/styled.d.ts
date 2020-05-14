// import original module declarations
import "styled-components";
import { IReadonlyTheme } from "@microsoft/sp-component-base";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends IReadonlyTheme {}
}
