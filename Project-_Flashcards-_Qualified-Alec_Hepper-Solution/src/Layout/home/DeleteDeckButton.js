import React from "react";
import { deleteDeck } from "../../utils/api/index";

function DeleteDeckButton({ deck }) {
  const handleTrashClick = () => {
    if (
      window.confirm("Delete this deck? You will not be able to recover it.")
    ) {
      deleteDeck(deck.id);
    }
  };

  return (
    <button type="button" className="btn btn-danger" onClick={handleTrashClick}>
      {/* Using the anchor element to trigger the home page to refresh after deleting 
      the deck. This causes the deleted deck to no longer be displayed on the Home screen */}
      <a href="/" className="text-white">
        <span className="oi oi-trash" />
      </a>
    </button>
  );
}

export default DeleteDeckButton;