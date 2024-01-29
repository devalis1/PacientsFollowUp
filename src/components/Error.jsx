const Error = ({errorMessage}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
        <p>{errorMessage}</p>
    </div>
  )
}

export default Error
