import React from 'react'

type Props = {}

const AddProducts = (props: Props) => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-y-3">
          <label htmlFor="" className='font-bold'>Name</label>
          <input type="text" className='border-2 rounded-md outline-violet-500 py-1 pl-2 text-violet-500'
          placeholder='name...'/>
        </div>
        <div className="flex flex-col gap-y-3">
          <label htmlFor="" className='font-bold'>Price</label>
          <input type="text" className='border-2 rounded-md outline-violet-500 py-1 pl-2 text-violet-500'placeholder='price...'/>
        </div>
        <div className="flex flex-col gap-y-3">
          <label htmlFor="" className='font-bold'>Miles</label>
          <input type="number" className='border-2 rounded-md outline-violet-500 py-1 pl-2 text-violet-500' placeholder='miles...'/>
        </div>
        <div className="flex flex-col gap-y-3">
          <label htmlFor="" className='font-bold'>Images</label>
          <input type="text" className='border-2 rounded-md outline-violet-500 py-1 pl-2 text-violet-500'placeholder='images...'/>
        </div>
        <div className="flex flex-col gap-y-3">
          <label htmlFor="" className='font-bold'>Description</label>
          <input type="text" className='border-2 rounded-md outline-violet-500 py-1 pl-2 text-violet-500' placeholder='desc...'/>
        </div>
      </form>
    </div>
  )
}

export default AddProducts