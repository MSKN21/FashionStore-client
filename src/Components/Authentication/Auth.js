import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import Datatree from '../../Images/background/datatree.png'

const Auth = () => {

  const [authToggle, setAuthToggle] = useState(true)

  const switchAuthToggle = () =>{
    setAuthToggle(!authToggle)
  }

  return (
    <div>
      <div className="h-screen flex bg-image">
        <div className="w-8/12 bg-[#6f1a2e00]">
          <div className="h-[90vh] flex items-center">
            <div className='text-white text-shadow ml-24'>
              <p className='font-bold text-8xl tracking-wider'>Fashion Store</p>
              <p className='text-4xl ml-[2px] mt-1 tracking-wide'>A Ecommerce Site</p>
            </div>
          </div>
        </div>
        <div className="w-4/12 bg-[#ffffff00]">
          <div className="h-screen flex items-center justify-center">
            {
              authToggle ? <Login switchAuthToggle={switchAuthToggle}/> : <SignUp switchAuthToggle={switchAuthToggle}/>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth