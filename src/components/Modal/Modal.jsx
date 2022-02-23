import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { ModalTable } from './ModalTable';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
const style = {
  position: 'absolute',
  top: '50px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  minHeight: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: '80px',
};

export function BasicModal({ arrayClients, addContact, open, handleClose }) {
  const [user, setUser] = useState('user');
  const [data, setData] = useState('no-data');
  const [comment, setComment] = useState('');
  const [value, setValue] = useState('0');
  const onChange = e => {
    const { name, value } = e.target;
    if (name === 'user' && value === '') {
      alert('Please fill out the form User ');
    }
    switch (name) {
      case 'user':
        setUser(value);

        break;
      case 'data':
        setData(value);

        break;
      case 'comment':
        setComment(value);

        break;
      case 'value':
        setValue(value);

        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ user, data, comment, value });
    // reset();
  };
  //   const reset = () => {
  //     setValue('');
  //     setComment('');
  //     setData('');
  //     setUser('');
  //   };
  return (
    <div>
      <Modal
        sx={{ position: 'relative' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalTable
            arrayClients={arrayClients}
            addContact={addContact}
          ></ModalTable>
          <form
            id="data"
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
            }}
            onSubmit={handleSubmit}
          >
            <TextField
              defaultValue={value}
              onChange={onChange}
              name="value"
              id="outlined-name"
              sx={{ width: '186.5px', borderRadius: '0' }}
            />
            <TextField
              defaultValue={data}
              onChange={onChange}
              name="data"
              id="outlined-name"
              sx={{ width: '289px', borderRadius: '0' }}
            />
            <TextField
              required
              defaultValue={user}
              onChange={onChange}
              name="user"
              id="outlined-name"
              sx={{ width: '171px', borderRadius: '0' }}
            />
            <TextField
              defaultValue={comment}
              onChange={onChange}
              name="comment"
              id="outlined-name"
              sx={{ width: '253px', borderRadius: '0' }}
            />
            <Button
              type="submit"
              sx={{ position: 'absolute', bottom: '-50px', right: '0px' }}
              variant="contained"
              size="small"
            >
              {' '}
              ADD
            </Button>
          </form>{' '}
          <Button
            onClick={handleClose}
            type="button"
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
            variant="contained"
            size="small"
          >
            {' '}
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
