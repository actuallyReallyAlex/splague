import {
  ADD_INVENTORY_ITEM,
  REMOVE_INVENTORY_ITEM,
  SET_INVENTORY_IS_OPEN,
  SET_INVENTORY_ITEMS,
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
      return {
        ...state,
        items: [...state.items, { ...action.payload.inventoryItem }],
      };
    }
    case REMOVE_INVENTORY_ITEM: {
      return {
        ...state,
        items: [
          ...state.items.filter(
            (item: InventoryItem, i) => i !== action.payload.inventoryIndex
          ),
        ],
      };
    }
    case SET_INVENTORY_IS_OPEN: {
      return { ...state, isOpen: action.payload.isOpen };
    }
    case SET_INVENTORY_ITEMS: {
      return { ...state, items: action.payload.items };
    }
    default:
      return state;
  }
};

export default reducer;
