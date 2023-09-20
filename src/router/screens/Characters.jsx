import { useParams } from "react-router-dom";
import { authorData, convertToLink } from "../../authorData";

const Characters = () => {
  const params = useParams();
  const [authorItem] = authorData.filter((item) => params.name === convertToLink(item.author));
  const [bookItem] = authorItem.book.filter((item) => params.book === convertToLink(item.name));

  return (
    <div>
      <h1>Characters</h1>
      <ul>
        {bookItem.characters.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
