import React from 'react'
import { ThumbsUp, Link, ShieldCheck } from 'lucide-react'
const Cards = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-col md:flex-row md:space-x-14 space-y-5 md:space-y-0 mb-5 w-full max-w-5xl'>
        <div className="flexBox flex-1 flex flex-col items-center border justify-center rounded-2xl p-5 mx-4">
          <ThumbsUp className='my-2 size-12' />
          <p className='text-lg m-2'>Easy</p>
          <p className='hidden md:block text-xs m-2 text-center font-bold'>Slinky is easy and fast, enter the long link to get your shortened link</p>
        </div>

        <div className="flexBox flex-1 flex flex-col items-center border justify-center rounded-2xl p-5 mx-4">
          <Link className='my-2 size-12' />
          <p className='text-lg m-2'>Shortened</p>
          <p className='hidden md:block text-xs m-2 text-center font-bold'>Use any link, no matter what size, ShortURL always shortens</p>
        </div>

        <div className="flexBox flex-1 flex flex-col items-center border justify-center rounded-2xl p-5 mx-4">
          <ShieldCheck className='my-2 size-12' />
          <p className='text-lg m-2'>Secure</p>
          <p className='hidden md:block text-xs m-2 text-center font-bold'>It is fast and secure, our service has HTTPS and data encryption</p>
        </div>
      </div>
    </div>

  )
}
export default Cards