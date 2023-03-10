import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { PencilIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function FeedWriteQue({title, mandatory = false, guide, name, value, explain, target}) {
  const [open, setOpen] = useState(false);
  
  const onChangeAccount = (e) => {
    if (e.target.value) {
      target(true)
    }
    else {
      target(false)
    }
  };

  return (
    <dlv className="block border-2 rounded-md mt-6">
        <div className="flex justify-between title h-16 leading-[64px]">
            <h2 className='ml-6 font-medium'>
              <div className="flex">
                <PencilIcon className={`w-6 h-6 mt-5 mr-3 
                ${mandatory === true ? "text-point-blue"
                : "text-orange-400"}
                `}/>
                <div className="text">
                {title}
                {mandatory === true ? <span className='text-gray-500 ml-3'>*필수질문</span>
                : null}
                </div>
              </div>
            </h2>
            <button type="button" className="btn btn-sm block bg-white hover:bg-white border-none mr-3 h-[62px] hover:opacity-50" onClick={() => setOpen(!open)}>
                <ChevronDownIcon className={`w-6 h-6 text-black
                ${open === true ? 'rotate-0' : 'rotate-180'}
              `}/>
            </button>
          </div>
          <div className={`
          content 
          transition-all
          duration-500 
          ease-in-out origin-top
          overflow-hidden
          ${open === true ? 'h-96' : 'h-0'}`}>
            <label htmlFor={name + "Input"} className='absolute w-px h-px -m-px overflow-hidden'>
              {explain} 을/를 적어주시는 곳
            </label>
            <textarea 
            className={`
            bg-white w-full h-96 focus:outline-0 border-gray-200 pl-6 text-sm pr-6
            `}
            onChange = {
              mandatory === true 
              ? onChangeAccount
              : null
            }
            type="text"
            placeholder={guide}
            name={name}
            value={value}
            id={name + "Input"}
            />
          </div>
        </dlv>
  )
}