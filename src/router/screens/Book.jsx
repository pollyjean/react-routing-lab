import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { authorData, convertToLink } from "../../authorData";

const Book = () => {
  const params = useParams();
  const [authorItem] = authorData.filter((item) => params.name === convertToLink(item.author));
  const [bookItem] = authorItem.book.filter((item) => params.book === convertToLink(item.name));
  return (
    <div>
      <h1>{bookItem.name}</h1>
      <div>
        <Link to={"chapters"}>Chapters</Link>
        <br />
        <Link to={"characters"}>Characters</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Book;
