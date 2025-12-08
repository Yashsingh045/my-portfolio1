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
        <div>
          <p className="sub--title">Get In Touch</p>
          <hr />
          <br />
          <h2>Contact Me</h2>

        </div>
        <div className="contact--container">

          <div >

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
                  <span className="text-md">phone-number</span>
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
                  {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
              </div>
              {submitMessage && (
                <p className="submit-message" style={{ marginTop: '1rem', fontWeight: 'bold' }}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          <div className="contact--side--container">
            <h2>E-Mail</h2>
            <br />
            <p>astomar6396@gmail.com</p>
            <br />
            <br />
            <br />
            <h2>Address</h2>
            <br />
            <p>Pune, Maharashtra</p>
            <p>
              India
            </p>
            <br />
            <br />
            <h2>Connect with Me</h2>
            <br />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
              <a href="https://www.linkedin.com/in/yashveer-singh-061bb1325/">
                <img src="./images/linkedin.png" alt="LinkedIn" style={{ borderRadius: "50%" }} />
              </a>
              <a href="https://github.com/Yashsingh045">
                <img src="./images/github.png" alt="GitHub" style={{ borderRadius: "50%" }} />
              </a>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}