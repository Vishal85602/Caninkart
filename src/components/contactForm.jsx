import React from 'react'

const ContactForm = () => {
    return (
        <>
            <section className="py-10 px-4 bg-[#FDFDFD] text-center ">
                <h2 className="text-sm font-semibold text-orange-500 mb-2">🧡 CONTACT</h2>
                <h3 className="text-lg font-bold mb-6">Contact Us</h3>

                <div className="bg-cover bg-center bg-no-repeat h-110 flex items-center  text-white  max-w-7xl mx-auto relative rounded-2xl border "
                    style={{ backgroundImage: ` url('/src/assets/contact-dog.png')` }}>
                    <div className="absolute top-3 right-5">
                        <form className="bg-[#F0F2F3] p-6 rounded shadow-md w-full max-w-sm text-left space-y-3 text-black ">
                            <input className="w-full border p-2 rounded text-black" type="text" placeholder="Your Name" />
                            <input className="w-full border p-2 rounded text-black" type="text" placeholder="Your Contact" />
                            <input className="w-full border p-2 rounded text-black" type="email" placeholder="Your Email" />
                            <textarea className="w-full border p-2 rounded" placeholder="Your Message" rows="3" />
                            <button className="w-full bg-orange-500 text-white py-2 rounded">SEND</button>
                        </form>
                    </div>


                </div>
            </section>
        </>
    )
}

export default ContactForm