import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const submittedFormData = new FormData(e.currentTarget);
        // Rest of the form submission logic

        // Clear form data
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        // Set submission status to true
        setIsSubmitted(true);
    };

    return (
        <section className="contactme">
            <div className="container contactcontainer" style={{padding:'9px'}}>
                <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
                <p className="text-lg text-center mb-10">
                    Have a question or want to collaborate? Feel free to reach out to me.
                </p>
                <div className="max-w-lg mx-auto">
                    {isSubmitted ? (
                        <p className="text-green-500 text-lg font-semibold mb-4">
                            Thank you for your message! I'll get back to you soon.
                        </p>
                    ) : (
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="form-name" value="contact" />
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="px-6 py-2 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactMe;

