import {useState, useEffect} from 'react';
import Error from './Error';

const Form = ({ patients, setPatients }) => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [synthoms, setSynthoms] = useState('');

  const [error, setError] = useState(false);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([petName, ownerName, email, date, synthoms].includes('')) {
      setError(true);
      return;
    }
    // Error Handling
    setError(false);

    // Patient object to add to state
    const patientObject = {
      petName,
      ownerName,
      email,
      date,
      synthoms,
      id: generateId()
    }
    setPatients([...patients, patientObject]);
    
    //Restart Values
    setDate('')
    setPetName('')
    setOwnerName('')
    setEmail('')
    setSynthoms('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Follow-up Patients</h2>

        <p className="text-lg mt-5 text-center mb-10">
          Add Patients & {""}
          <span className="text-indigo-600 font-bold">Manage them</span>
        </p>

        <form 
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
          onSubmit={handleSubmit}  
        >
          { error &&
            <Error errorMessage='All fields required!' />
          }
          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
              Pet Name
              </label>
            <input 
              id="pet"
              type="text"
              placeholder="Pet Name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={petName}
              onChange={ (e) => setPetName(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
              Owner Name
              </label>
            <input 
              id="owner"
              type="text"
              placeholder="Owner Name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={ownerName}
              onChange={ (e) => setOwnerName(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email
              </label>
            <input 
              id="email"
              type="email"
              placeholder="Contact Email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
              Date
              </label>
            <input 
              id="date"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={date}
              onChange={ (e) => setDate(e.target.value) }
            />
          </div>

          <div className="mb-5">
            <label htmlFor="synthoms" className="block text-gray-700 uppercase font-bold">
              Synthoms
            </label>
            <textarea 
              id="synthoms"
              placeholder="Describe your pet synthoms"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={synthoms}
              onChange={ (e) => setSynthoms(e.target.value) }
            />
          </div>

          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
            value="Add Patient"
          />
        </form>
    </div>
  )
}

export default Form
