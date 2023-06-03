import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { SiGmail, SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactMe: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_o9qwf07',
                'template_8x1x04a',
                e.currentTarget,
                'Ishmam Ahmed'
            )
            .then((result) => {
                // Handle success
                console.log(result.text);
                setIsSubmitted(true);
            })
            .catch((error) => {
                // Handle error
                console.error(error.text);
            });

        // Clear form data
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <section className="contactme">
            <div className="container contactcontainer" style={{ padding: '9px' }}>
                <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
                <p className="text-lg text-center mb-5 text-white">
                    Have a question or want to collaborate? Feel free to reach out to me.
                </p>
                <motion.div className="media-icons flex mb-5 justify-center">
                    <a href="mailto:ishmam.ahmed24@gmail.com" rel="noopener noreferrer" className="mr-6">
                        <SiGmail className="text-3xl" style={{ color: '#ffffff' }} />
                    </a>
                    <a href="https://github.com/IshmamDC217" rel="noopener noreferrer" className="mr-6">
                        <AiFillGithub className="text-3xl" style={{ color: '#ffffff' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/ishmam-ahmed-689b0998/" rel="noopener noreferrer" className="mr-6">
                        <SiLinkedin className="text-3xl" style={{ color: '#ffffff' }} />
                    </a>
                </motion.div>
                <div className="max-w-lg mx-auto">
                    {isSubmitted ? (
                        <p className="text-green-500 text-lg font-semibold mb-4">
                            Thank you for your message! I'll get back to you soon.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <input type="hidden" name="form_name" value="contact" />
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-lg font-semibold mb-2 text-white"
                                >
                                    <i className="fas fa-user"></i> Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-semibold mb-2 text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-lg font-semibold mb-2 text-white"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
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
