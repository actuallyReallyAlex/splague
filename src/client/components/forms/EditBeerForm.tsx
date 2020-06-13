import * as React from "react";
import { editBeer } from "../../api/beer";
import { isEqual } from "../../util";
import { Beer } from "../../types";

export interface EditBeerFormProps {
  currentBeer: Beer;
  refreshBeers: Function;
  setCurrentBeer: Function;
  setIsLoading: Function;
  setIsModalOpen: Function;
  setModalContent: Function;
}

/**
 * Form to Edit a Beer.
 */
const EditBeerForm: React.SFC<EditBeerFormProps> = ({
  currentBeer,
  refreshBeers,
  setCurrentBeer,
  setIsLoading,
  setIsModalOpen,
  setModalContent,
}) => {
  const [newBeerAbv, setNewBeerAbv] = React.useState(currentBeer.abv);
  const [newBeerBrewer, setNewBeerBrewer] = React.useState(currentBeer.brewer);
  const [newBeerDescription, setNewBeerDescription] = React.useState(
    currentBeer.description
  );
  const [newBeerName, setNewBeerName] = React.useState(currentBeer.name);
  const [newBeerType, setNewBeerType] = React.useState(currentBeer.type);

  /* NEW LINE */
  const isDisabled = isEqual(
    {
      abv: newBeerAbv,
      brewer: newBeerBrewer,
      description: newBeerDescription,
      name: newBeerName,
      type: newBeerType,
    },
    {
      abv: currentBeer.abv,
      brewer: currentBeer.brewer,
      description: currentBeer.description,
      name: currentBeer.name,
      type: currentBeer.type,
    }
  );

  /* NEW LINE */
  return (
    <form
      className="form"
      id="edit-beer-form"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await editBeer({
          id: currentBeer._id,
          abv: newBeerAbv,
          brewer: newBeerBrewer,
          description: newBeerDescription,
          name: newBeerName,
          type: newBeerType,
        });
        await refreshBeers();
        setIsModalOpen(false);
        setModalContent(null);
        setCurrentBeer(null);
        setIsLoading(false);
      }}
    >
      <h3>Edit Beer</h3>
      <label htmlFor="edit-beer-abv">ABV</label>
      <input
        id="new-beer-abv"
        name="newBeerAbv"
        onChange={(e) => setNewBeerAbv(Number(e.target.value))}
        type="number"
        value={newBeerAbv}
      />
      <label htmlFor="new-beer-brewer">Brewer</label>
      <input
        id="new-beer-brewer"
        name="newBeerBrewer"
        onChange={(e) => setNewBeerBrewer(e.target.value)}
        type="text"
        value={newBeerBrewer}
      />
      <label htmlFor="new-beer-description">Description</label>
      <input
        id="new-beer-description"
        name="newBeerDescription"
        onChange={(e) => setNewBeerDescription(e.target.value)}
        type="text"
        value={newBeerDescription}
      />
      <label htmlFor="new-beer-name">Name</label>
      <input
        id="new-beer-name"
        name="newBeerName"
        onChange={(e) => setNewBeerName(e.target.value)}
        type="text"
        value={newBeerName}
      />
      <label htmlFor="new-beer-type">Type</label>
      <input
        id="new-beer-type"
        name="newBeerType"
        onChange={(e) => setNewBeerType(e.target.value)}
        type="text"
        value={newBeerType}
      />
      <button disabled={isDisabled} type="submit">
        Update
      </button>
    </form>
  );
};

export default EditBeerForm;
