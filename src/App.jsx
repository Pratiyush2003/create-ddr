import React from 'react'
import FirstPage from './component/FirstPage'
import './App.css'
import ShowInput from './component/ShowInput'
import FarmerTable from './component/FarmerTable'

const App = () => {
  return (
    <>
      <div className='w-full flex justify-center'>
        <div className="p-10 m-5 border border-gray-300 w-full max-w-4xl bg-white rounded-lg flex flex-col">
          <FirstPage />
          <ShowInput />
          <FarmerTable />
        </div>
      </div>
    </>

  )
}

export default App
