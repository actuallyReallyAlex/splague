import * as React from "react";
import { connect } from "react-redux";
import { openMenu } from "../redux/thunks";

export interface MenuButtonProps {
  handleOpenMenu: () => void;
}

const MenuButton: React.SFC<MenuButtonProps> = (props: MenuButtonProps) => {
  const { handleOpenMenu } = props;
  return (
    <button className="nes-btn" id="open-menu" onClick={() => handleOpenMenu()}>
      OPEN MENU
    </button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  handleOpenMenu: () => dispatch(openMenu()),
});

export default connect(null, mapDispatchToProps)(MenuButton);
