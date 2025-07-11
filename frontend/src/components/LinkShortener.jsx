import { useState, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast'
import api from "../apis/api.js";
import { RefreshCcw } from 'lucide-react'
const LinkShortener = () => {
  const [link, setLink] = useState('');
  const [shortlink, setShortLink] = useState('')
  const [loading, setLoading] = useState(false);
  const [isInputEmpty, setInputEmpty] = useState(false);
  const [isManyReq,setManyReq] = useState(false);

  const handleLinkInput = (e) => {
    setLink(e.target.value);
    setInputEmpty(false)
  }

  const linkRef = useRef();

  const notifyCopied = () => {
    toast('Link Copied', {
      duration: 1500,
      icon: '✅'
    })
  }

  const notifyToWaitBeforeRequest = () => {
    toast('Too many requests, please try again after a minute.', {
      duration: 2000,
      icon: '⚠️'
    })
  }

  const handleCopy = async () => {
    const link = linkRef.current.textContent
    await navigator.clipboard.writeText(link)
    notifyCopied()
  }

  const shortUrl = async (orglink) => {
    try {
      if (!orglink) {
        setInputEmpty(true)
        return
      }

      setLoading(true)
      const res = await api.post('/short', {
        originalUrl: orglink
      })

      const reslink = await res.data.url

      if (reslink) {
        setLoading(false)
        setManyReq(false)
      }
      setShortLink(`${import.meta.env.VITE_API_URL}/${reslink}`)

    } catch (err) {
      if (err.status === 429) {
        notifyToWaitBeforeRequest();
      }
      setLoading(false);
      setManyReq(true);
      setShortLink('');
      console.log(isManyReq)
    }
  }

  return (
    <>
      <div className="flex-1 flex items-center justify-center font-inter py-8">
        <div className="linkBox flex flex-col shadow-md shadow-black border md:p-10 p-2 rounded-2xl">
          <div className="link-box-wrapper rounded-xl md:p-15 md:m-10 p-2 bg-blue-500">
            <p className="text-xl text-center font-bold text-white">Paste the URL to be shortened</p>
            <div className="input-wrapper mt-4 space-x-3 my-4">
              <input onChange={handleLinkInput} value={link} className="focus:outline-none rounded-xs md:p-3.5 p-1 bg-white" placeholder="enter the link" type="text" />
              <button type="submit" onClick={() => shortUrl(link)} className="btn bg-white md:p-3 p-1 md:text-lg text-blue-700 rounded-xs hover:bg-slate-200">shorten url</button>
            </div>
            {isInputEmpty && <p className="text-red-600">Enter Link First</p>}
          </div>

          <div className="links p-5">
            <ul>
              {
                !loading && shortlink ? <li className="mb-2 bg-blue-500 rounded-lg p-3">
                  <div className="flex-box flex justify-between items-center">
                    <p ref={linkRef} className="text-white">{shortlink}</p>
                    <button onClick={handleCopy} className="bg-white px-3 py-2 rounded-lg text-blue-600 hover:bg-slate-200 text-base">copy</button>
                  </div>
                </li> : loading ? <div className="flex-box flex items-center justify-center"><RefreshCcw className="animate-spin size-8" /></div>
                      : !loading && isManyReq ?<div className="">
                        <p className="text-red-600 text-xl text-center">Too Many Requests, Wait Before Sending Another</p>
                      </div>:<></>
              }
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default LinkShortener;