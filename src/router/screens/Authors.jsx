import { Link, Outlet, useParams } from "react-router-dom";
import { authorData, convertToLink } from "../../authorData";

const Authors = () => {
  const params = useParams();
  const [authorItem] = authorData.filter((item) => params.name === convertToLink(item.author));
  return (
    <div>
      <h1>{authorItem.author}</h1>
      <ul>
        {authorItem.book.map((item) => (
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
