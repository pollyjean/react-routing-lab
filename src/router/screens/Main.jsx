import React from "react";
import { authorData, convertToLink } from "../../authorData";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        {authorData.map((item, index) => (
          <li key={convertToLink(item.author)}>
            <Link to={`author/${convertToLink(item.author)}`} state={{ index }}>
              {item.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
