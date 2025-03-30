export default function ContactMe() {
    return (
      <>
        <section id="Contact" className="contact--section">
          <div>
            <p className="sub--title">Get In Touch</p>
            <hr/>
            <br/>
            <h2>Contact Me</h2>
            
          </div>
          <div className="contact--container">

          <div >

            <form className="contact--form--container">
              <div className="container">
                <label htmlFor="first-name" className="contact--label">
                  <span className="text-md">First Name</span>
                  <input
                    type="text"
                    className="contact--input text-md"
                    name="first-name"
                    id="first-name"
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
                    required
                  />
                </label>
              </div>
              
              <label htmlFor="message" className="contact--label">
                <span className="text-md">Message</span>
                <textarea
                  className="contact--input text-md"
                  id="message"
                  rows="6"
                  placeholder="Type your message..."
                />
              </label>
              <div>
                <button className="btn btn-primary contact--form--btn">Send</button>
              </div>
            </form>
          </div>

          <div className="contact--side--container">
            <h2>E-Mail</h2>
            <br/>
            <p>astomar6396@gmail.com</p>
            <br/>
            <br/>
            <br/>
            <h2>Address</h2>
            <br/>
            <p>Pune, Maharashtra</p>
            <p>
              India
            </p>
            <br/> 
            <br/>
            <h2>Connect with Me</h2>
            <br/>
            <div>
              <a href="">
                <img src="./images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="">
                <img src="./images/github.png" alt="GitHub" />
              </a>
              <a href="">
                <img src="./images/twitter.png" alt="Twitter" />  
              </a>
            </div>
          </div>
          </div>
        </section>
        
      </>
    );
  }