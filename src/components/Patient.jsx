const Patient = () => {
  return (
    <div className="mx-5 my-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
          <span className="font-normal normal-case">Alan</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">test@gmail.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Appointment date: {''}
          <span className="font-normal normal-case">10/12/24</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Synthoms: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, neque quis aliquam illo est corporis fuga atque libero ratione natus a quia voluptatem, tempore dolor omnis aliquid. Nihil, unde suscipit!</span>
        </p>
      </div>
  )
}

export default Patient
