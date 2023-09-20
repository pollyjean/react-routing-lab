import React from "react";
import { useParams } from "react-router-dom";
import { authorData, convertToLink } from "../../authorData";

const Book = () => {
  const { book, name } = useParams();
  const [linkedItem] = authorData.filter((item) => name === convertToLink(item.author));
  console.log(linkedItem);

  return (
    <div>
      <h1>Book</h1>
    </div>
  );
};

export default Book;
