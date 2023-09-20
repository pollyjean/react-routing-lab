import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { authorData, convertToLink } from "../../authorData";

const Authors = () => {
  const { state } = useLocation();
  console.log(state);
  const { name } = useParams();
  const [linkedItem] = authorData.filter((item) => name === convertToLink(item.author));
  return (
    <div>
      <h1>{linkedItem.author}</h1>
      <ul>
        {linkedItem.book.map((item) => (
          <li key={convertToLink(item.name)}>
            <Link to={`${convertToLink(item.name)}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Authors;
