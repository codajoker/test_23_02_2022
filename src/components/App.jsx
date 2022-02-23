import { useEffect, useState } from 'react';
import axios from 'axios';
import { ColumnGroupingTable } from './Table/Table';
import { BasicModal } from './Modal/Modal';
import { nanoid } from 'nanoid';

export const App = () => {
  const [arrayClients, setArrayClients] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('clients')) ?? [
        {
          value: 5,
          data: '20.20.2020',
          user: 'Vlad',
          comment: 'vay',
          id: nanoid(),
        },
      ]
    );
  });
  const [objectCity, setObjectCity] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const addContact = data => {
    setArrayClients(prevState => {
      return [
        {
          value: data.value,
          data: data.data,
          user: data.user,
          comment: data.comment,
          id: nanoid(),
        },
        ...prevState,
      ];
    });
  };
  async function API() {
    const fetch = await axios.get(
      'https://6214d79989fad53b1f210931.mockapi.io/city'
    );
    const data = fetch.data[0];
    return setObjectCity(data);
  }
  useEffect(() => {
    window.localStorage.setItem('clients', JSON.stringify(arrayClients));
  }, [arrayClients]);
  useEffect(() => {
    API();
  }, []);
  return (
    <>
      {objectCity && (
        <>
          <ColumnGroupingTable
            handleOpen={handleOpen}
            objectCity={objectCity}
          ></ColumnGroupingTable>
          <BasicModal
            arrayClients={arrayClients}
            addContact={addContact}
            open={open}
            handleClose={handleClose}
          ></BasicModal>
        </>
      )}
    </>
  );
};
