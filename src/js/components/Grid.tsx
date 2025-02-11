import Notecard from "./Notecard";
import "./Grid.css";

const Grid: React.FC = () => {
  const messages = [
    "Hey",
    "Wassup",
    "Hello",
    "Hi"
  ]; // random text for testing (READ LOVENOTES text into here!!!)

  const renderNotecards = () => {
    return messages.map((message, index) => (
      <div key={index} className="wrapper">
        <Notecard text={message} /> {/* Pass different text to each Notecard */}
      </div>
    ));
  };

  return <div className="grid">{renderNotecards()}</div>;
};

export default Grid;