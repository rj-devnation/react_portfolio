import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

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
        <form onSubmit={handleSubmit} className='emailForm'>
            <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='email' placeholder='Your Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />

            <textarea cols='30' rows='7' value={message} placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className='submitButton' type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
