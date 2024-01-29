import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PatientsList from "./components/PatientsList"

const App = () => {

  const [patients, setPatientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <PatientsList />
      </div>

    </div>
  )
}

export default App
