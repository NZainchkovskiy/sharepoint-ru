import * as React from "react";
import * as ReactDom from "react-dom";
import {
  Version,
  Environment,
  EnvironmentType,
} from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp/presets/all";

import * as strings from "Module02WebPartStrings";
import Module02 from "./components/Module02";
import { IModule02Props } from "./components/IModule02Props";

export interface IModule02WebPartProps {
  description: string;
}

export default class Module02WebPart extends BaseClientSideWebPart<
  IModule02WebPartProps
> {
  public render(): void {
    const element: React.ReactElement<IModule02Props> = React.createElement(
      Module02,
      {
        description: this.properties.description,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    sp.setup({ spfxContext: this.context });
    return super.onInit();
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription,
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField("description", {
                  label: strings.DescriptionFieldLabel,
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
