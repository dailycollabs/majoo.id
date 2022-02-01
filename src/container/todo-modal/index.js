import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const TodoModal = ({ children, isOpen, onToggleModal }) => {
  return (
    <>
      <button className="btn btn-success btn-sm" onClick={() => onToggleModal()}>See Detail</button>
      <Modal size="md" centered isOpen={isOpen} toggle={onToggleModal}>
        <ModalHeader>Detail</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    </>
  );
}

export default TodoModal;