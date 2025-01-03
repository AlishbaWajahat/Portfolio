import React from 'react'

export default function page() {
    return (
        <>
            {/* <!-- Contact Form Section --> */}
            <section id="contact" className="py-12 bg-gray-100 px-4 h-screen flex items-center">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Contact Me</h2>
                    <p className="text-lg text-gray-600 mb-12">I'd love to hear from you! Please feel free to reach out to me with any questions or opportunities.</p>

                    <form action="#" method="POST" className="space-y-6">
                        {/* <!-- Name Field --> */}
                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-4">Your Name</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        </div>

                        {/* <!-- Email Field --> */}
                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-4">Your Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
                        </div>

                        {/* <!-- Message Field --> */}
                        <div>
                            <label className="block text-left text-gray-700 font-medium mb-4">Your Message</label>
                            <textarea id="message" name="message" required rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"></textarea>
                        </div>

                        {/* <!-- Submit Button --> */}
                        <div>
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </>
    )
}


