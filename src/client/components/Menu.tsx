import * as React from "react";
import { connect } from "react-redux";
import { MenuPage, RootState, Theme } from "../types";

export interface MenuProps {
  currentpage: MenuPage;
  theme: Theme;
}

const Menu: React.SFC<MenuProps> = (props: MenuProps) => {
  const { currentpage, theme } = props;
  return (
    <dialog
      className={`nes-dialog ${theme === "dark" ? "is-dark" : ""}`}
      id="menu"
    >
      <form method="dialog">
        <p className="title">Main Menu</p>
        <h3>{currentpage.toLocaleUpperCase()}</h3>
        {/* <p>{content}</p> */}
        {/* <menu className="dialog-menu">
          <button
            className="nes-btn is-primary"
            id="alert-primary"
            onClick={() => primaryAction()}
          >
            {primaryActionText}
          </button>
          {secondaryActionText && (
            <button
              className="nes-btn"
              id="alert-secondary"
              onClick={() => secondaryAction()}
            >
              {secondaryActionText}
            </button>
          )}
        </menu> */}
      </form>
    </dialog>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentpage: state.menu.currentPage,
  theme: state.ui.theme,
});

export default connect(mapStateToProps)(Menu);
