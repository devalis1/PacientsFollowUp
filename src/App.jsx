import { useState, useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientsList from "./components/PatientsList"

const App = () => {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({}); 

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])
  
  const deletePatient = (id) => {
    const updatedPatients = patients.filter(singlePatient => singlePatient.id !== id);
    setPatients(updatedPatients);
  } 

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          setPatients={setPatients}
          setPatient={setPatient}
          patients={patients}
          patient={patient}
        />
        <PatientsList 
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>

    </div>
  )
}

export default App
