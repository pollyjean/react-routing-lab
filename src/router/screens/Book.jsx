import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { authorData, convertToLink } from "../../authorData";

const Book = () => {
  const { state } = useLocation();
  const authorIndex = state.authorIndex;
  const bookIndex = state.index;
  const bookItem = authorData[authorIndex].book[bookIndex];
  return (
    <div>
      <h1>{bookItem.name}</h1>
      <div>
        <Link to={"chapters"}>Chapters</Link>
        <br />
        <Link to={"characters"}>Characters</Link>
      </div>
    </div>
  );
};

export default Book;
