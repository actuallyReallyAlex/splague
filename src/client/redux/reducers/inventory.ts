import { ADD_INVENTORY_ITEM } from "../actionTypes";
import { InventoryAction, InventoryState } from "../../types";

export const initialState: InventoryState = {
  items: [],
};

const reducer = (
  state = initialState,
  action: InventoryAction
): InventoryState => {
  switch (action.type) {
    case ADD_INVENTORY_ITEM: {
      return { ...state, items: [...state.items, action.payload.item] };
    }
    default:
      return state;
  }
};

export default reducer;
