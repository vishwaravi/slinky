import React from 'react'
import { Zap, Link, ShieldCheck } from 'lucide-react'

const Cards = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Generate shortened URLs in milliseconds with our optimized infrastructure.",
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      icon: Link,
      title: "Always Short",
      description: "Transform any URL length into a compact, shareable link that works everywhere.",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: ShieldCheck,
      title: "Secure & Safe",
      description: "Enterprise-grade security with HTTPS encryption and spam protection.",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-200"
    }
  ];

  return (
    <section className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose <span className="gradient-text">Slinky</span>?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Powerful features designed to make URL shortening simple, fast, and reliable for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.title}
              className={`${feature.lightColor} ${feature.borderColor} border-2 rounded-2xl p-6 hover-lift transition-all duration-300 group fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of users who trust Slinky for their URL shortening needs.
            Start creating better links today!
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Create Your First Link
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cards