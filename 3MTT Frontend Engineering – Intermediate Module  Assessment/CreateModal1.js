import React from 'react';
import { Modal, Button, Form } from 'react-modal';
import styled from '@emotion/styled';

// Style the modal (optional)
const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CreateRepoModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, description }); // Pass data to parent component
  };

  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Create New Repo</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <Button type="submit">Create</Button>
      </Form>
      <Button onClick={onClose}>Close</Button>
    </StyledModal>
  );
};

export default CreateRepoModal;
