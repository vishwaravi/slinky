import { AlertCircle, Home, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NotFound404 = () => {
  const navigate = useNavigate();

  function goHome() {
    navigate('/');
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="flex justify-center mb-8 fade-in">
          <div className="relative">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <AlertCircle className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">404</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="text-white mb-8 fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-2">
            The page you're looking for doesn't exist.
          </p>
          <p className="text-base opacity-75">
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 fade-in" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={goHome}
            className="w-full bg-white text-blue-600 font-semibold py-4 px-6 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl group"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span>Take Me Home</span>
          </button>
          
          <button
            onClick={goBack}
            className="w-full bg-transparent border-2 border-white text-white font-semibold py-4 px-6 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-300 bg-opacity-10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-4 w-16 h-16 bg-yellow-300 bg-opacity-10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  )
}

export default NotFound404