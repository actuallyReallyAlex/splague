import * as React from "react";
import { InventoryItem } from "../types";

export interface InventoryItemProps {
  item?: InventoryItem;
}

const InventoryItem: React.SFC<InventoryItemProps> = (
  props: InventoryItemProps
) => {
  const { item } = props;
  return (
    <td data-tip={item ? item.name : ""} className="inventory-slot">
      {item && <img alt={item.name} src={item.image} />}
    </td>
  );
};

export default InventoryItem;
