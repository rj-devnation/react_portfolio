import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/contact/', formData);
            console.log('Message sent successfully!');
            // You can add logic to show a success message or redirect the user.
        } catch (error) {
            console.error('Error sending message:', error);
            // You can add logic to show an error message.
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Your Name:</label>
            <input type="text" name="name" onChange={handleChange} required />

            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} required />
            
            <label>Subject:</label>
            <input type="subject" name="subject" onChange={handleChange} required />

            <label>Message:</label>
            <textarea name="message" onChange={handleChange} required></textarea>

            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
