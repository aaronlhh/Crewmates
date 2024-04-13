import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../routes/Layout.jsx';
import CreatePage from '../components/CreatePage.jsx';
import Gallery from '../components/Gallery.jsx';
import CrewInfo from '../components/CrewInfo.jsx';
import EditPage from '../components/EditPage.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index={true} element={<App />} />
                    <Route path='/create' element={<CreatePage />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/:id' element={<CrewInfo />} />
                    <Route path='/:id/edit' element={<EditPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
