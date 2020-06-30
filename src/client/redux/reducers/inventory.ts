import {
  ADD_INVENTORY_ITEM,
  REMOVE_INVENTORY_ITEM,
  SET_INVENTORY_IS_OPEN,
} from "../actionTypes";
import { InventoryAction, InventoryState, InventoryItem } from "../../types";

export const initialState: InventoryState = {
  isOpen: false,
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
    case REMOVE_INVENTORY_ITEM: {
      return {
        ...state,
        items: [
          ...state.items.filter(
            (item: InventoryItem) =>
              item.name !== action.payload.inventoryItem.name
          ),
        ],
      };
    }
    case SET_INVENTORY_IS_OPEN: {
      return { ...state, isOpen: action.payload.isOpen };
    }
    default:
      return state;
  }
};

export default reducer;
