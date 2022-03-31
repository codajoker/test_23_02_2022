import { useEffect, useState } from 'react';
import axios from 'axios';
import { ColumnGroupingTable } from './Table/Table';
import { BasicModal } from './Modal/Modal';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const [objectCity, setObjectCity] = useState(null);

  async function API() {
    const fetch = await axios.get(
      'https://6214d79989fad53b1f210931.mockapi.io/city'
    );
    const data = fetch.data[0];
    return setObjectCity(data);
  }

  useEffect(() => {
    API();
  }, []);
  return (
    <>
      {objectCity && (
        <>
          <Routes>
            <Route
              path="/"
              element={<ColumnGroupingTable objectCity={objectCity} />}
            />
            <Route path="popup/*" element={<BasicModal />} />
          </Routes>
          {/* <ColumnGroupingTable
            
          ></ColumnGroupingTable> */}
          {/* <BasicModal open={open} handleClose={handleClose}></BasicModal> */}
        </>
      )}
    </>
  );
};
