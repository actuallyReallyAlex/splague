import {
  ADD_INVENTORY_ITEM,
  REMOVE_INVENTORY_ITEM,
  SET_INVENTORY_IS_OPEN,
  SET_INVENTORY_ITEMS,
} from "../actionTypes";
import { InventoryAction, InventoryItem } from "../../types";

export const addInventoryItem = (
  inventoryItem: InventoryItem
): InventoryAction => ({
  type: ADD_INVENTORY_ITEM,
  payload: { inventoryItem },
});

export const removeInventoryItem = (
  inventoryIndex: number
): InventoryAction => ({
  type: REMOVE_INVENTORY_ITEM,
  payload: { inventoryIndex },
});

export const setInventoryItems = (items: InventoryItem[]): InventoryAction => ({
  type: SET_INVENTORY_ITEMS,
  payload: { items },
});

export const setInventoryIsOpen = (isOpen: boolean): InventoryAction => ({
  type: SET_INVENTORY_IS_OPEN,
  payload: { isOpen },
});
