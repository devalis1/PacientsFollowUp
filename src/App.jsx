import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientsList from "./components/PatientsList"

const App = () => {

  const [patients, setPatients] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          setPatients={setPatients}
          patients={patients}
        />
        <PatientsList 
          patients={patients}
        />
      </div>

    </div>
  )
}

export default App
