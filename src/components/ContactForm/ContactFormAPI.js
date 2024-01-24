import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ isDarkMode }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // EmailJS serviceID, template ID, and Public Key
        const publicKey = 'SHA8noVzpBbTb4iCG';
        const serviceId = 'service_tgm0mwa';
        const templateId = 'template_8i2n7sn';

        // Create a new object that contains dynamic template params
        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Roland Geli',
                message: message,
            }
        }

        // Send email using EmailJS
        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className='pb-4 md:rounded-xl'>
            <div className='flex flex-col items-center text-center justify-center pt-11 h-full mx-2 '>
                <h1 className='text-5xl font-semibold z-[2] md:text-[64px]'>Contact Me</h1>
                <div className='relative w-72 h-6 bg-red-500 bottom-5 skew-x-[24deg] md:w-96 md:h-8 md:bottom-7'></div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 px-8'>
                <input type='text' className='border border-gray-600 rounded-md pl-2' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type='email' className='border border-gray-600 rounded-md pl-2' placeholder='Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />

                <textarea cols='30' rows='7' value={message} className='border border-gray-600 rounded-md pl-2' placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
                <div className='flex justify-center'>
                    <button className='bg-red-500 text-white uppercase font-semibold tracking-wider px-16 w-56 h-14 mt-5 rounded-md text-lg transition ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white drop-shadow-lg delay-150 duration-300' type="submit">Send</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
