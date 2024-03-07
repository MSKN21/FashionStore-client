import React from 'react'

const Account = () => {
  return (
    <div className='m-4 border-[1px] border-[#d4d5d9]'>
      { false ?
        <div className='mx-auto w-4/6 py-5'>
          <h1 className='p-6 border-b-[1px] border-[#eaeaec] text-lg font-bold'>Profile Details</h1>
          <div className='grid grid-cols-2 text-base my-6 px-6 '>
            <div>
              <p className='px-1 py-3 w-[200px]'>Full Name</p>
              <p className='px-1 py-3 w-[200px]'>Mobile Number</p>
              <p className='px-1 py-3 w-[200px]'>Email ID</p>
              <p className='px-1 py-3 w-[200px]'>Gender</p>
              <p className='px-1 py-3 w-[200px]'>Date Of Birth</p>
              <p className='px-1 py-3 w-[200px]'>Location</p>
              <p className='px-1 py-3 w-[200px]'>Alternate Mobile</p>
              <p className='px-1 py-3 w-[200px]'>Hint Name</p>
            </div>
            <div>
              <p className='px-1 py-3 w-[200px]'>Sai Krupananda</p>
              <p className='px-1 py-3 w-[200px]'>8688554605</p>
              <p className='px-1 py-3 w-[200px]'>saikrupananda21@gmail.com</p>
              <p className='px-1 py-3 w-[200px]'>NOTSET</p>
              <p className='px-1 py-3 w-[200px]'>- not added -</p>
              <p className='px-1 py-3 w-[200px]'>- not added -</p>
              <p className='px-1 py-3 w-[200px]'>- not added -</p>
              <p className='px-1 py-3 w-[200px]'>- not added -</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='bg-[#FF3F6C] text-center font-bold py-3 text-white cursor-pointer rounded-sm w-full my-5 mx-6'>EDIT</div>
          </div>
        </div> :
        <div className='mx-auto w-5/6 py-5'>
          <h1 className='p-3 border-b-[1px] border-[#eaeaec] text-lg font-bold'>Edit Details</h1>
          <div className='text-base my-6 px-3'>
            <div className='border-[1px] my-6 rounded-sm px-3 py-2 text-xs flex items-center'>
              <input type="text" className='w-5/6 focus:border-none outline-none' placeholder='Mobile Number'/>
              {
                false ? <p className='w-1/6 text-sm font-bold border-[1px] text-center py-2 cursor-pointer'>Verify</p>
                : <p className='w-1/6 text-sm font-bold border-[1px] text-center py-2 cursor-pointer'>Change</p>
              }
            </div>
            <div className='border-[1px] my-6 rounded-sm p-3 text-xs'>
              <input type="text" className='w-full focus:border-none outline-none' placeholder='Full Name'/>
            </div>
            <div className='border-[1px] my-6 rounded-sm p-3 text-xs'>
              <input type="text" className='w-full focus:border-none outline-none' placeholder='Email'/>
            </div>
            <div className='border-[1px] my-6 rounded-sm text-sm flex items-center'>
              <p className='text-center w-1/2 border-r-[1px] py-2 cursor-pointer'>Male</p>
              <p className='text-center w-1/2 py-2 cursor-pointer'>Female</p>
            </div>
            <div className='border-[1px] rounded-sm p-3 text-xs'>
              <input type="text" className='w-full focus:border-none outline-none' placeholder='Birthday (dd/mm/yyyy)'/>
            </div>
            <div className='my-6'>
              <h2 className='text-sm font-bold mt-3 mb-6'>Alternate mobile details</h2>
              <div className='border-[1px] rounded-sm p-3 text-xs flex items-center mb-5'>
                <span className='w-[5%] border-r-[2px]'>+91</span><input type="text" className='w-[95%] pl-3 focus:border-none outline-none' placeholder='Mobile Number'/>
              </div>
              <div className='border-[1px] rounded-sm p-3 text-xs'>
                <input type="text" className='w-full focus:border-none outline-none' placeholder='Hint Name'/>
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <div className='bg-[#FF3F6C] text-center font-bold py-3 text-white cursor-pointer rounded-sm w-full my-5 mx-3'>SAVE DETAILS</div>
          </div>
        </div>
      }
      
    </div>
  )
}

export default Account