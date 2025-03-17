import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Header from './components/Header/Header'
import PatientList from './components/PatientList/PatientList'
import PatientCard from './components/PatientCard/PatientCard'

function App() {

  const router = createBrowserRouter(
    [
        { path: "/", element: <PatientList /> },
        { path: "/patientCard/:id", element: <PatientCard /> }
    ],
    { future: { v7_startTransition: true } }
);

  return (
    <>
       <Header />
       <RouterProvider router={router} />
    </>
  )
}

export default App
