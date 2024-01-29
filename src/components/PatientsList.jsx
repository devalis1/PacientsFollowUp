import Patient from "./Patient"

const PatientsList = ({patients}) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { patients && patients.length ? 
        (
          <>
            <h2 className="font-black text-3xl text-center">Patients List</h2> 
            <p className="text-xl mt-5 mb-10 text-center">
              Manage your {''}
              <span className="text-indigo-600 font-bold">Patients and Appointments</span>
            </p>

            { patients.map( patient => (
              <Patient 
                key={patient.id}
                patientInfo={patient}
              />
            ))}
          </>
        ) : 
        (
          <>
            <h2 className="font-black text-3xl text-center">No patients</h2> 
            <p className="text-xl mt-5 mb-10 text-center">
              Start adding your patients which {''}
              <span className="text-indigo-600 font-bold">will display here</span>
            </p>
          </>
        )
      }
    </div>
  )
}

export default PatientsList
