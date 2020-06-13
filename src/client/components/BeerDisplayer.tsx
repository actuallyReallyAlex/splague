import * as React from "react";
import { Beer } from "../types";

export interface BeerDisplayerProps {
  beers: Beer[];
  setCurrentBeer: Function;
  setIsModalOpen: Function;
  setModalContent: Function;
}

/**
 * Displays Beers in the database.
 */
const BeerDisplayer: React.SFC<BeerDisplayerProps> = ({
  beers,
  setCurrentBeer,
  setIsModalOpen,
  setModalContent,
}) => {
  return (
    <div>
      <div id="beer-table-heading">
        <h2>Beer List</h2>
        <button
          onClick={() => {
            setModalContent("newBeerForm");
            setIsModalOpen(true);
          }}
        >
          Add
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th className="column1">ABV</th>
            <th>Brewer</th>
            <th>Description</th>
            <th>Name</th>
            <th>Type</th>
            <th className="column6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer: Beer) => (
            <tr key={beer._id}>
              <td className="column1">{beer.abv}</td>
              <td>{beer.brewer}</td>
              <td>{beer.description}</td>
              <td>{beer.name}</td>
              <td>{beer.type}</td>
              <td className="column6 action-column">
                <button
                  onClick={() => {
                    setModalContent("editBeerForm");
                    setCurrentBeer(beer);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    setModalContent("deleteBeerForm");
                    setCurrentBeer(beer);
                    setIsModalOpen(true);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BeerDisplayer;
