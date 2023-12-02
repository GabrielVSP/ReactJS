import React, { useState } from 'react';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { next, previous } from './store';

function App() {

  const images = [
    'https://th.bing.com/th/id/OIP.O1hu8qZbmzYTBugl0pVPkAHaEK?w=328&h=184&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.AwRDQgTNDi_VHdzSzCJyUQHaEK?w=329&h=184&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.UqPyCRkTREaXYwx3RMWXhQHaEK?w=329&h=184&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.rfGWQXD3quEBtYZWHBszeQHaEK?w=328&h=184&c=7&r=0&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.6XlubCuIVL5BbslMGaKZzQHaEK?w=328&h=184&c=7&r=0&o=5&pid=1.7'
  ]

  const num = useSelector((state: any) => state.CurrentImage.value)
  const dispatch = useDispatch()

  return (

      <div className="App">
      
          <div><img src={images[num]} alt="" /></div>
          <button onClick={() => dispatch(next(images.length))}>Next</button>
          <button onClick={() => dispatch(previous(images.length))}>Previous</button>

         {/* <button onClick={() => setCurImage(curImage + 2 > images.length ? 0 : curImage + 1)}>Next</button>
          <button onClick={() => setCurImage(curImage - 1 < 0 ? images.length - 1 : curImage - 1)}>Previous</button>*/}
      </div>

  );
}

export default App;
