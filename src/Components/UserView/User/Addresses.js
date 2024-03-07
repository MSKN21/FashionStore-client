import React from 'react'

const Addresses = () => {

    const Addresses = [1,2,3];

    const showAddress = (index) =>{
        let allAddresses = [...document.querySelectorAll(".addresses")]
        allAddresses.forEach(Address =>{
            if(!Address.querySelector(".addressDetail").classList.contains("truncate"))
                Address.querySelector(".addressDetail").classList.add("truncate")
            if(Address.querySelector(".addressDiv").classList.contains("block"))
                Address.querySelector(".addressDiv").classList.replace("block","hidden")
        })
        allAddresses[index].querySelector(".addressDetail").classList.remove("truncate")
        allAddresses[index].querySelector(".addressDiv").classList.replace("hidden","block")
    }

    return (
        <>
        <div className='px-6'>

            <div className='flex mt-3 px-2'>
                <p className='w-1/2 font-bold text-lg mt-2'>Saved Addresses</p>
                <p className='w-1/2 flex justify-end'>
                    <p className='text-[#526cd0] p-3 font-bold text-[13px] border-[1px] rounded-sm cursor-pointer'>+ ADD NEW ADDRESS</p>
                </p>
            </div>

            <div className=''>
                <h2 className='font-bold mt-6 mb-3 text-xs pl-2'>DEFAULT ADDRESS</h2>
                <div className=''>
                    <div className='p-3 my-5 text-[#696E79] text-sm cursor-pointer shadow-lg hover:shadow-xl'>
                        <div className='flex mb-2'>
                            <p className='w-1/2 font-bold mb-1'>M Saikrupananda</p>
                            <p className='w-1/2 flex justify-end'>
                                <p className='bg-[#F5F5F6] py-1 px-3 rounded-2xl font-bold text-[11px]'>HOME</p>
                            </p>
                        </div>
                        <p className='w-4/5 overflow-hidden'>Flat no.402 , 4th floor , sai sri lakshmi narasimha pg for men , 20 chowdeshwari layout , bhoganahalli Road ambedkar circle , devarabisanahalli</p>
                        <p>Bangalore - 560064</p>
                        <p>Karnataka</p>
                        <p className='py-3'>Mobile: 8688554605</p>
                        <div className='flex items-center border-t-[1px] text-[#526cd0] font-bold'>
                            <p className='text-center py-2 border-r-[1px] w-1/2'>EDIT</p>
                            <p className='text-center py-2 w-1/2'>DELETE</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className=''>
                <h2 className='font-bold mt-6 mb-3 text-xs pl-2'>OTHER ADDRESSES</h2>
                <div className=''>
                    {
                        Addresses.map((address,index) => <div className='p-3 my-5 text-[#696E79] text-sm cursor-pointer shadow-lg hover:shadow-xl addresses' onClick={()=>showAddress(index)}>
                            <div className='flex mb-2'>
                                <p className='w-1/2 font-bold mb-1'>M Saikrupananda</p>
                                <p className='w-1/2 flex justify-end'>
                                    <p className='bg-[#F5F5F6] py-1 px-3 rounded-2xl font-bold text-[11px]'>HOME</p>
                                </p>
                            </div>
                            <p className='w-4/5 overflow-hidden truncate addressDetail'>Flat no.402 , 4th floor , sai sri lakshmi narasimha pg for men , 20 chowdeshwari layout , bhoganahalli Road ambedkar circle , devarabisanahalli</p>
                            <p>Bangalore - 560064</p>
                            <p>Karnataka</p>
                            <div className='hidden addressDiv'>
                                <p className='py-3'>Mobile: 8688554605</p>
                                <p className='text-xs text-[#14cda8] font-semibold mb-3'>MAKE THIS DEFAULT</p>
                                <div className='flex items-center border-t-[1px] text-[#526cd0] font-bold'>
                                    <p className='text-center py-2 border-r-[1px] w-1/2'>EDIT</p>
                                    <p className='text-center py-2 w-1/2'>DELETE</p>
                                </div>
                            </div>
                        </div> 
                        )
                    }
                </div>
            </div>
        </div>
        {
            false && <div className='fixed left-0 top-0 w-full h-screen bg-[#0000006f] z-[60]'>
                <div className='flex items-center h-full'>
                    <div className='w-[500px] h-[80%] mx-auto bg-white'>
                        <div className='border-b-[1px] text-[#535766] font-bold text-sm py-3 px-5'>
                            <h1>ADD NEW ADDRESS</h1>
                        </div>
                        <div className='h-[87%] overflow-y-scroll custom-scrollbar-dropdown py-5 bg-[#f0f0f0]'>
                            <div className='bg-white px-5 py-2 my-3 shadow-md'>
                                <div className='border-b-[1px] my-6 rounded-sm py-2 text-sm font-semibold'>
                                    <input type="text" className='w-full focus:border-none outline-none' placeholder='Full Name'/>
                                </div>
                                <div className='border-b-[1px] my-6 rounded-sm py-2 text-sm font-semibold'>
                                    <input type="text" className='w-full focus:border-none outline-none' placeholder='Mobile'/>
                                </div>
                            </div>
                            <div className='bg-white px-5 py-2 my-3 shadow-md'>
                                <div className='flex my-6'>
                                    <div className='w-1/2 mr-6 border-b-[1px] rounded-sm py-2 text-sm font-semibold'>
                                        <input type="text" className='w-full focus:border-none outline-none' placeholder='Pincode'/>
                                    </div>
                                    <div className='w-1/2 mr-6 border-b-[1px] rounded-sm py-2 text-sm font-semibold'>
                                        <input type="text" className='w-full focus:border-none outline-none' placeholder='State'/>
                                    </div>
                                </div>
                                <div className='border-b-[1px] my-6 rounded-sm py-2 text-sm font-semibold'>
                                    <input type="text" className='w-full focus:border-none outline-none' placeholder='Address (House No, Building,Street,Area)'/>
                                </div>
                                <div className='border-b-[1px] my-6 rounded-sm py-2 text-sm font-semibold'>
                                    <input type="text" className='w-full focus:border-none outline-none' placeholder='Locality/Town'/>
                                </div>
                                <div className='border-b-[1px] my-6 rounded-sm py-2 text-sm font-semibold'>
                                    <input type="text" className='w-full focus:border-none outline-none' placeholder='City/District'/>
                                </div>
                            </div>
                            <div className='bg-white px-5 py-2 my-3 shadow-md'>
                                <div className='border-b-[1px] text-sm'>
                                    <h1 className='text-[#94969F] font-semibold'>Type Of Address</h1>
                                    <div className='flex items-center w-4/5 my-4'>
                                        <p className='w-1/2 flex items-center'><input type='radio' name='addType' className='h-4 w-4'/><p for='addType' className='px-2'>Home</p></p>
                                        <p className='w-1/2 flex items-center'><input type='radio' name='addType' className='h-4 w-4'/><p for='addType' className='px-2'>Office</p></p>
                                    </div>
                                </div>
                                <div className='my-4 text-sm'>
                                    <p className='flex items-center'><input type='checkbox' className='h-4 w-4'/> <p className='pl-3'> Make this as my default address</p></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center border-[1px] text-[#535766] text-sm font-bold'>
                            <p className='text-center py-3 border-r-[1px] w-1/2'>CANCEL</p>
                            <p className='text-center py-3 w-1/2 bg-[#BFC0C6] text-white'>SAVE</p>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Addresses