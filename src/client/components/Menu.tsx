import * as React from "react";
import { connect } from "react-redux";
import { MenuPage, RootState } from "../types";

export interface MenuProps {
  currentpage: MenuPage;
}

const Menu: React.SFC<MenuProps> = (props: MenuProps) => {
  return <div id="menu">MENU</div>;
};

const mapStateToProps = (state: RootState) => ({
  currentpage: state.menu.currentPage,
});

export default connect(mapStateToProps)(Menu);
