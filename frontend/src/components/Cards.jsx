import React from 'react'
import { ThumbsUp, Link, ShieldCheck } from 'lucide-react'
const Cards = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex space-x-14 mb-5 m-2'>
        <div className="flexBox flex flex-col items-center h-40 w-40 border justify-center rounded-2xl">
          <ThumbsUp className='my-2 size-12' />
          <p className='text-lg m-2'>Easy</p>
          <p className='text-xs m-2 text-center'>Slinky is easy and fast, enter the long link to get your shortened link</p>
        </div>

        <div className="flexBox flex flex-col items-center h-40 w-40 border justify-center rounded-2xl">
          <Link className='my-2 size-12' />
          <p className='text-lg m-2'>Shortened</p>
          <p className='text-xs m-2 text-center'>Use any link, no matter what size, ShortURL always shortens</p>
        </div>

        <div className="flexBox flex flex-col items-center h-40 w-40 border justify-center rounded-2xl">
          <ShieldCheck className='my-2 size-12' />
          <p className='text-lg m-2'>Secure</p>
          <p className='text-xs m-2 text-center'>It is fast and secure, our service has HTTPS and data encryption</p>
        </div>
      </div>
    </div>

  )
}
export default Cards