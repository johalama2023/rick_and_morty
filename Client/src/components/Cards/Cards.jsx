import Card from "../Card/Card.jsx";
import "./Cards.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className="cardsContainer">
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
