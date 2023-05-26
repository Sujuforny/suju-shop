import React from 'react'

export default function CardUserComponent({name,image}) {
  return (
    <div className='flex flex-col items-center'>

    <img className='rounded-full w-24 h-24' src={image} />
    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{name}</button>
    
    </div>
  )
}
