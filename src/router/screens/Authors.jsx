import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { authorData, convertToLink } from "../../authorData";

const Authors = () => {
  const { state } = useLocation();
  const authorIndex = state.index;
  const authorItem = authorData[authorIndex];
  return (
    <div>
      <h1>{authorItem.author}</h1>
      <ul>
        {authorItem.book.map((item, index) => (
          <li key={convertToLink(item.name)}>
            <Link to={`${convertToLink(item.name)}`} state={{ authorIndex, index }}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Authors;
