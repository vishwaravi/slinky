import {Frown} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const NotFound404 = () => {

  const goto = useNavigate();

  function goHome(){
    goto('/');
  }

  return (
    <div className='h-screen w-screen flex items-center justify-center bg-blue-400'>

      <div className='flex flex-col items-center text-white'>
        <Frown className='size-36 my-10' />
        <p className='text-4xl font-bold'>Page Not Found</p>
        <button onClick={goHome} className='p-3 border-2 my-10 text-2xl hover:bg-amber-50 hover:text-blue-400'>
          Take me Home
        </button>
      </div>

    </div>
  )
}

export default NotFound404