/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createRoot, hydrateRoot } from 'react-dom/client';
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Loading from './global/Loading.tsx';
// import i18n
import './global/i18n.js';

createRoot(document.getElementById('root')!).render(  
  <React.StrictMode>
    <Suspense loading={<Loading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
  
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

//hydrateRoot(document, <App assetMap={window.assetMap} />);
//@ts-ignore
hydrateRoot(document, <React.StrictMode><Suspense loading={<Loading />}><BrowserRouter><AppWithNavDemo assetMap={window.assetMap} /></BrowserRouter></Suspense></React.StrictMode>);