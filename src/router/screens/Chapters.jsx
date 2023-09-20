import { useParams } from "react-router-dom";
import { authorData, convertToLink } from "../../authorData";

const Chapters = () => {
  const params = useParams();
  const [authorItem] = authorData.filter((item) => params.name === convertToLink(item.author));
  const [bookItem] = authorItem.book.filter((item) => params.book === convertToLink(item.name));

  return (
    <div>
      <h1>Chapters</h1>
      <ul>
        {bookItem.chapters.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chapters;
