import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
    return (
        <div className="contact-buttons">
            <a href="https://zalo.me/0353846079" className="contact-button zalo">
                <img src="zalo-icon.png" alt="Zalo Icon" />
                Nhắn tin Zalo
            </a>
            <a href="https://m.me/7328430137180532" className="contact-button messenger">
                <img src="messenger-icon.png" alt="Messenger Icon" />
                Nhắn tin Messenger
            </a>
            <a href="tel:0353846079" className="contact-button phone">
                <img src="phone-icon.png" alt="Phone Icon" />
                0353846079
            </a>
        </div>
    );
};

export default Contact;
