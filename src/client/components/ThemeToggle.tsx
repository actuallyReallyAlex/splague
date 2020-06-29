import * as React from "react";
import { connect } from "react-redux";
import { setTheme } from "../redux/actions/ui";
import { RootState, Theme } from "../types";

export interface ThemeToggleProps {
  handleThemeToggle: (theme: Theme) => void;
  theme: Theme;
}

const ThemeToggle: React.SFC<ThemeToggleProps> = (props: ThemeToggleProps) => {
  const { handleThemeToggle, theme } = props;
  return (
    <button
      className="nes-btn is-primary"
      id="theme-toggle"
      onClick={() => handleThemeToggle(theme)}
    >
      Toggle Theme
    </button>
  );
};

const mapStateToProps = (state: RootState) => ({ theme: state.ui.theme });

const mapDispatchToProps = (dispatch) => ({
  handleThemeToggle: (theme: Theme) => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeToggle);
