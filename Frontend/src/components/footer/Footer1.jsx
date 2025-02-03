import React from 'react'

const Footer1 = () => {
  return (
    <div>
         <footer className="w-full bg-gray-900 text-white py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-lg mb-8">
            Don't miss any updates. Follow us on social media and join the Novio community.
          </p>
          <div className="flex justify-center space-x-8 mb-10">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>

          <p className="text-sm">
            &copy; {new Date().getFullYear()} Novio. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer1