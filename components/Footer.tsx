import React from 'react'
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
    <footer className="bg-[#7d738c] text-white py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Footer Header */}
        <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
        
        {/* Social Icons Links */}
        <div className="flex space-x-6">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/03311347822" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-green-500"
          >
            <FaWhatsapp />
          </a>
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/alishba-wajahat-a872292ba/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          {/* GitHub */}
          <a 
            href="https://github.com/AlishbaWajahat" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-400 mt-6">&copy; 2025 Your Name. All Rights Reserved.</p>
      </div>
    </footer>
    </>

  )
}

