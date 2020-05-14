import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "Module03WebPartStrings";
import Module03 from "./components/Module03";
import { IModule03Props } from "./components/IModule03Props";
import {
  IReadonlyTheme,
  ThemeProvider,
  ThemeChangedEventArgs,
} from "@microsoft/sp-component-base";

export interface IModule03WebPartProps {
  description: string;
}

export default class Module03WebPart extends BaseClientSideWebPart<
  IModule03WebPartProps
> {
  private themeProvider: ThemeProvider;
  private themeVariant?: IReadonlyTheme;
  public render(): void {
    const element: React.ReactElement<IModule03Props> = React.createElement(
      Module03,
      {
        description: this.properties.description,
        theme: this.themeVariant,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onInit(): Promise<void> {
    this.themeProvider = this.context.serviceScope.consume(
      ThemeProvider.serviceKey
    );
    this.themeVariant = this.themeProvider.tryGetTheme();
    this.themeProvider.themeChangedEvent.add(
      this,
      this.handleThemeChangedEvent
    );
    return super.onInit();
  }

  private handleThemeChangedEvent(args: ThemeChangedEventArgs) {
    this.themeVariant = args.theme;
    this.render();
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
