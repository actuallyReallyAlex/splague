import { ADD_INVENTORY_ITEM, REMOVE_INVENTORY_ITEM } from "../actionTypes";
import { InventoryAction, InventoryItem } from "../../types";

export const addInventoryItem = (
  inventoryItem: InventoryItem
): InventoryAction => ({
  type: ADD_INVENTORY_ITEM,
  payload: { inventoryItem },
});

export const removeInventoryItem = (
  inventoryItem: InventoryItem
): InventoryAction => ({
  type: REMOVE_INVENTORY_ITEM,
  payload: { inventoryItem },
});
