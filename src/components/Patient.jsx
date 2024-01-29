const Patient = ({patientInfo}) => {
  const {petName, ownerName, email, date, synthoms} = patientInfo;
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
          <span className="font-normal normal-case">{petName}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
          <span className="font-normal normal-case">{ownerName}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Appointment date: {''}
          <span className="font-normal normal-case">{date}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Synthoms: {''}
          <span className="font-normal normal-case">{synthoms}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button 
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          >
            Edit
          </button>

          <button 
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
  )
}

export default Patient
