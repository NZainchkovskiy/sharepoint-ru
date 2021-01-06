import * as React from "react";
import styles from "./Module03.module.scss";
import { IModule03Props } from "./IModule03Props";
import { escape } from "@microsoft/sp-lodash-subset";
import styled, { ThemeProvider } from "styled-components";
import { IReadonlyTheme } from "@microsoft/sp-component-base";

const StyledButton = styled.a`
  text-decoration: none;
  height: 32px;
  min-width: 80px;
  background-color: ${(props) => props.theme.palette.themePrimary};
  border-color: ${(props) => props.theme.palette.themePrimary};
  color: ${(props) => props.theme.palette.white};
  outline: transparent;
  position: relative;
  font-family: "Segoe UI WestEuropean", "Segoe UI", -apple-system,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: ${(props) => props.theme.fonts.medium.fontSize}px;
  font-weight: ${(props) => props.theme.fonts.medium.fontWeight};
  border-width: 0;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  padding: 0 16px;
  box-shadow: ${(props) =>
    props.theme.isInverted
      ? "0px 0px 10px " + props.theme.palette.black
      : "none"};
`;

const ButtonLabel = styled.span`
  font-weight: ${(props) => props.theme.fonts.medium.fontWeight};
  font-size: ${(props) => props.theme.fonts.medium.fontSize}px;
  height: 32px;
  line-height: 32px;
  margin: 0 4px;
  vertical-align: top;
  display: inline-block;
`;
export default class Module03 extends React.Component<IModule03Props, {}> {
  public render(): React.ReactElement<IModule03Props> {
    return (
      <ThemeProvider theme={this.props.theme}>
        <div className={styles.module03}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.column}>
                <span className={styles.title}>Welcome to SharePoint!</span>
                <p className={styles.subTitle}>Hello GitHub Fixed!</p>
                <p className={styles.description}>
                  {escape(this.props.description)}
                </p>
                <StyledButton href="https://aka.ms/spfx">
                  <ButtonLabel>Learn more</ButtonLabel>
                </StyledButton>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
