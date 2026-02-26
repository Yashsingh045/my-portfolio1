import { useRef, useState } from 'react';

export default function ContactMe() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(form.current);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitMessage('Message sent successfully! ✓');
        setIsSubmitting(false);
        form.current.reset();
      } else {
        setSubmitMessage('Failed to send message. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      setSubmitMessage('Failed to send message. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="Contact" className="contact--section">
        <div className="contact--section--header">
          <p className="sub--title">Get In Touch</p>
          <h2 className="sections--heading">Contact Me</h2>
          <p className="contact--section--desc">Have a project in mind or want to collaborate? I'd love to hear from you!</p>
        </div>
        <div className="contact--container">
          <div>
            <form ref={form} className="contact--form--container" onSubmit={sendEmail}>
              <div className="container">
                <label htmlFor="first-name" className="contact--label">
                  <span className="text-md">First Name</span>
                  <input
                    type="text"
                    className="contact--input text-md"
                    name="first-name"
                    id="first-name"
                    placeholder="Enter your first name"
                    required
                  />
                </label>
                <label htmlFor="last-name" className="contact--label">
                  <span className="text-md">Last Name</span>
                  <input
                    type="text"
                    className="contact--input text-md"
                    name="last-name"
                    id="last-name"
                    placeholder="Enter your last name"
                    required
                  />
                </label>
                <label htmlFor="email" className="contact--label">
                  <span className="text-md">Email</span>
                  <input
                    type="email"
                    className="contact--input text-md"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </label>
                <label htmlFor="phone-number" className="contact--label">
                  <span className="text-md">Phone Number</span>
                  <input
                    type="number"
                    className="contact--input text-md"
                    name="phone-number"
                    id="phone-number"
                    placeholder="Enter your phone number"
                    required
                  />
                </label>
              </div>

              <label htmlFor="message" className="contact--label">
                <span className="text-md">Message</span>
                <textarea
                  className="contact--input text-md"
                  id="message"
                  name="message"
                  rows="8"
                  placeholder="Type your message..."
                />
              </label>

              <div>
                <button
                  type="submit"
                  className="btn btn-primary contact--form--btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitMessage && (
                <p className={`submit-message ${submitMessage.includes('successfully') ? 'submit-success' : 'submit-error'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          <div className="contact--side--container">
            <div className="contact--info--card">
              <span className="contact--info--icon">✉️</span>
              <div>
                <h3 className="contact--info--title">Email</h3>
                <a href="mailto:astomar6396@gmail.com" className="contact--info--value">astomar6396@gmail.com</a>
              </div>
            </div>

            <div className="contact--info--card">
              <span className="contact--info--icon">📍</span>
              <div>
                <h3 className="contact--info--title">Location</h3>
                <p className="contact--info--value">Pune, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact--info--card">
              <span className="contact--info--icon">🤝</span>
              <div>
                <h3 className="contact--info--title">Connect with Me</h3>
                <div className="contact--social--links">
                  <a href="https://www.linkedin.com/in/yashveer-singh-061bb1325/" target="_blank" rel="noreferrer" className="contact--social--link">
                    <img src="./images/linkedin.png" alt="LinkedIn" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://github.com/Yashsingh045" target="_blank" rel="noreferrer" className="contact--social--link">
                    <img src="./images/github.png" alt="GitHub" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}