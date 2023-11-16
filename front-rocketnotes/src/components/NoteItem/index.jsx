import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
const NoteItem = ({ isNew, value, onClick, ...props }) => {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...props} />
      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};

export default NoteItem;
