import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import Dashboard from './assets/Pages/1-Dashboard/Dashboard.jsx';
import Team from './assets/Pages/2-ManageTeam/Team.jsx';
import Contacts from './assets/Pages/3-Contacts/Contacts.jsx';
import Invoice from './assets/Pages/4-Invoice/Invoice.jsx';
import ProfileForm from './assets/Pages/5-ProfileForm/ProfileForm.jsx';
import Calendar from './assets/Pages/6-Calendar/Calendar.jsx';
import FAQPage from './assets/Pages/7-FAQPage/FAQPage.jsx';
import BarChart from './assets/Pages/8-BarChart/BarChart.jsx';
import PieChart from './assets/Pages/9-PieChart/PieChart.jsx';
import LineChart from './assets/Pages/10-LineChart/LineChart.jsx';
import GeographyChart from './assets/Pages/11-GeographyChart/GeographyChart.jsx';
import NotFound from './assets/Pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
       <Route path="/" element={<App />}>
       <Route index element={<Dashboard />}/>
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />

      <Route path="Invoice" element={<Invoice />} />
      <Route path="form" element={<ProfileForm />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<FAQPage />} />
      <Route path="BarChart" element={<BarChart />} />
      <Route path="PieChart" element={<PieChart />} />
      <Route path="LineChart" element={<LineChart />} />
      <Route path="GeographyChart" element={<GeographyChart />} />
      <Route path="*" element={<NotFound />} />
 
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
