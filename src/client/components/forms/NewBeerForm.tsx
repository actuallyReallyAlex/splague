import * as React from "react";
import { addBeer } from "../../api/beer";

export interface NewBeerFormProps {
  refreshBeers: Function;
  setIsLoading: Function;
  setIsModalOpen: Function;
  setModalContent: Function;
}

/**
 * Form to Edit a Beer.
 */
const NewBeerForm: React.SFC<NewBeerFormProps> = ({
  refreshBeers,
  setIsLoading,
  setIsModalOpen,
  setModalContent,
}) => {
  const [newBeerAbv, setNewBeerAbv] = React.useState(0.0);
  const [newBeerBrewer, setNewBeerBrewer] = React.useState("");
  const [newBeerDescription, setNewBeerDescription] = React.useState("");
  const [newBeerName, setNewBeerName] = React.useState("");
  const [newBeerType, setNewBeerType] = React.useState("");

  /* NEW LINE */
  return (
    <form
      className="form"
      id="new-beer-form"
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await addBeer({
          abv: newBeerAbv,
          brewer: newBeerBrewer,
          description: newBeerDescription,
          name: newBeerName,
          type: newBeerType,
        });
        await refreshBeers();
        setIsModalOpen(false);
        setModalContent(null);
        setIsLoading(false);
      }}
    >
      <h3>Add New Beer</h3>
      <label htmlFor="new-beer-abv">ABV</label>
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
      <button type="submit">Add</button>
    </form>
  );
};

export default NewBeerForm;
