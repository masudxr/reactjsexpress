import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
// import ApiData from './components/ApiData.js';
// import DataFetching from './components/useEffect.js';
// import FetchingSingle from './components/EffectGetSingle.js';
// import ObjectApiData from './components/ObjectDataApi.js';
// import MenuBar from './components/MenuBar.js';
import MyLayOut from './components/Layout.js';

const rootElement = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootElement);
appRoot.render(
  <React.StrictMode>
    <div>
      <MyLayOut />
      {/* <MenuBar /> */}
      <br/>
    {/* <App /> */}
    <br/>
    {/* <ObjectApiData /> <br/> */}
     {/* <ApiData />    <br/> */}
    {/* <FetchingSingle />    <br/> */}
    {/* <DataFetching /> */}
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
