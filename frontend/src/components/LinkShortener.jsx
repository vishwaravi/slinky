import { useState, useRef } from "react";
import toast, { Toaster } from 'react-hot-toast'
import api from "../apis/api.js";
import { RefreshCcw, Link as LinkIcon, Copy, Check, AlertCircle } from 'lucide-react'

const LinkShortener = () => {
  const [link, setLink] = useState('');
  const [shortlink, setShortLink] = useState('')
  const [loading, setLoading] = useState(false);
  const [isInputEmpty, setInputEmpty] = useState(false);
  const [isManyReq, setManyReq] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLinkInput = (e) => {
    setLink(e.target.value);
    setInputEmpty(false)
    setManyReq(false);
  }

  const linkRef = useRef();

  const notifyCopied = () => {
    toast.success('Link copied to clipboard!', {
      duration: 2000,
      position: 'top-center',
    })
  }

  const notifyToWaitBeforeRequest = () => {
    toast.error('Too many requests, please try again after a minute.', {
      duration: 3000,
      position: 'top-center',
    })
  }

  const handleCopy = async () => {
    try {
      const link = linkRef.current.textContent
      await navigator.clipboard.writeText(link)
      setCopied(true);
      notifyCopied()
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  }

  const shortUrl = async (orglink) => {
    try {
      if (!orglink || !orglink.trim()) {
        setInputEmpty(true)
        return
      }

      setLoading(true)
      setManyReq(false);
      
      const res = await api.post('/short', {
        originalUrl: orglink
      })

      const reslink = await res.data.url

      if (reslink) {
        setLoading(false)
        setManyReq(false)
        setShortLink(`${import.meta.env.VITE_API_URL}/${reslink}`)
        toast.success('URL shortened successfully!');
      }

    } catch (err) {
      if (err.status === 429) {
        notifyToWaitBeforeRequest();
      } else {
        toast.error('Failed to shorten URL. Please try again.');
      }
      setLoading(false);
      setManyReq(true);
      setShortLink('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    shortUrl(link);
  }

  return (
    <section className="w-full max-w-4xl mx-auto fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4">
            <LinkIcon className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Shorten Your URLs
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform long, complex URLs into clean, shareable links in seconds. Fast, secure, and completely free.
        </p>
      </div>

      {/* Main URL Shortener Card */}
      <div className="glass-effect rounded-2xl shadow-xl p-6 md:p-8 hover-lift">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Section */}
          <div className="space-y-4">
            <label htmlFor="url-input" className="block text-sm font-medium text-gray-700">
              Enter your long URL
            </label>
            <div className="relative">
              <input
                id="url-input"
                type="url"
                value={link}
                onChange={handleLinkInput}
                placeholder="https://example.com/very-long-url-that-needs-shortening"
                className={`w-full px-4 py-3 pr-12 text-gray-900 bg-white border-2 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-200 ${
                  isInputEmpty ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-gray-200'
                }`}
                disabled={loading}
              />
              <LinkIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>
            
            {isInputEmpty && (
              <div className="flex items-center space-x-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>Please enter a valid URL</span>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || !link.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <RefreshCcw className="w-5 h-5 animate-spin" />
                <span>Shortening...</span>
              </>
            ) : (
              <>
                <LinkIcon className="w-5 h-5" />
                <span>Shorten URL</span>
              </>
            )}
          </button>
        </form>

        {/* Results Section */}
        <div className="mt-8">
          {loading && (
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <RefreshCcw className="w-8 h-8 text-blue-600 animate-spin mx-auto mb-2" />
                <p className="text-gray-600">Creating your short link...</p>
              </div>
            </div>
          )}

          {!loading && shortlink && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 fade-in">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-green-800">Your shortened URL:</h3>
                <div className="flex items-center text-green-600">
                  <Check className="w-5 h-5 mr-1" />
                  <span className="text-sm font-medium">Success!</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <div className="flex-1 w-full">
                  <div className="bg-white border border-green-200 rounded-lg p-3">
                    <p 
                      ref={linkRef} 
                      className="text-blue-600 font-mono text-sm break-all"
                    >
                      {shortlink}
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg min-w-[120px] justify-center"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {!loading && isManyReq && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 fade-in">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 mb-1">Too Many Requests</h3>
                  <p className="text-red-600">Please wait a moment before creating another short link.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Toaster 
        toastOptions={{
          style: {
            borderRadius: '12px',
            background: '#fff',
            color: '#333',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          }
        }}
      />
    </section>
  )
}

export default LinkShortener;