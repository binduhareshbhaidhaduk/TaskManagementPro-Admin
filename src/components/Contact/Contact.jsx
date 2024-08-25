import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';
import './Contact.css';
import { GiRotaryPhone } from 'react-icons/gi';
import { MdOutlineEmail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addContactMessage } from '../../Services/Action/taskAction';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContactMessage(formData));
        setFormData({ email: '', name: '', message: '' }); // Reset the form after submission
    };

    return (
        <div className="container contact-page ">
            {/* Contact Information Section */}
            <div className="contact-info-section container">
                <div className="info-cards">
                    <div className="info-card">
                        <IoLocationOutline className="icon" />
                        <h3>OUR MAIN OFFICE</h3>
                        <p>SoHo 94 Broadway St<br />New York, NY 1001</p>
                    </div>
                    <div className="info-card">
                        <IoCallOutline className="icon" />
                        <h3>PHONE NUMBER</h3>
                        <p>234-9876-5400<br />888-0123-4567 (Toll Free)</p>
                    </div>
                    <div className="info-card">
                        <GiRotaryPhone className="icon" />
                        <h3>FAX</h3>
                        <p>1-234-567-8900</p>
                    </div>
                    <div className="info-card">
                        <MdOutlineEmail className="icon" />
                        <h3>EMAIL</h3>
                        <p><a href="mailto:hello@theme.com">workflowhub@gmail.com</a></p>
                    </div>
                </div>
                <div className="map">
                    {/* Embed Google Map */}
                </div>
            </div>

            <div className="contact-form-section ">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-title">
                        <h2>Contact Us</h2>
                        <p>We love to hear from you! Please fill out the form below.</p>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter a valid email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
