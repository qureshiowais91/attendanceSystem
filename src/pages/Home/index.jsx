/* eslint-disable react/no-unescaped-entities */
import './index.css'; // Import your CSS file for styling
import { NavLink, useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigate = useNavigate();

  const redirect = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const rediretLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className='container' id='landingPage'>
      <header>
        {/* <nav>
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
          </ul>
        </nav> */}
      </header>
      <section className='section1 styleimage'>
        <div className='content'>
          <h1 className='largeText'>HERO</h1>
          <p className='subheading'>
            To ensure the safety and protection of every Student.where their
            well-being comes first.
          </p>
        </div>
      </section>
      <section className='section2'>
        <div className='content'>
          <h2>Why Choose Us?</h2>
          <div className='row'>
            <div className='column'>
              <h2>Instant notification</h2>
              <p>
                Instant alerts create a sense of reassurance for parents,
                keeping them informed about their child's well-being.
              </p>
              <h2>Easy attendance tracking</h2>
              <p>
                Effortless updates foster stronger bonds between schools and
                families, enhancing trust and connection through seamless
                communication channels.
              </p>
              <h2>Secure and Reliable</h2>
              <p>
                Your information remains protected and secure, accessible only
                to those with authorized access.
              </p>
            </div>
            <div className='column'>
              <h2>Customized Solutions</h2>
              <p>
                Tailored options to match the unique requirements of your
                school, ensuring flexibility and personalized service.
              </p>
              <h2>Better communication</h2>
              <p>
                Effortless updates foster stronger bonds between schools and
                families, enhancing trust and connection through seamless
                communication channels.
              </p>
              <h2>24/7 Support</h2>
              <p>
                Assistance is available round the clock via call, email, or
                chat, ensuring help is just a message away whenever you need it.
              </p>
            </div>
          </div>

          <p className='subtext'>
            Register For 3 Years And Get a FREE Website! <br/> <br/>For 3 Years
          </p>
          <button className='cta-button' onClick={redirect}>
            Register Now
          </button>

          <p>Already Have An Account ?</p>
          <button className='cta-button' onClick={rediretLogin}>
            Login
          </button>
        </div>
      </section>
      <section className='section3'>
        <div className='content'>
          <h2>Frequently Asked Questions</h2>
          <div className='faq'>
            <p>
              <strong>Are there custom packages available for schools?</strong>
            </p>
            <p>Yes, we offer tailored solutions to fit your unique needs.</p>
          </div>
          <div className='faq'>
            <p>
              <strong>
                How long does it take to set up Attendance Hero for our school?
              </strong>
            </p>
            <p>
              Typically, users find it to be a straightforward process, taking
              no longer than a day. Rest assured, we are dedicated to making the
              setup experience as seamless as possible for you
            </p>
          </div>
          <div className='faq'>
            <p>
              <strong>
                What kind of support do you offer if we encounter any issues?
              </strong>
            </p>
            <p>
              We provide comprehensive support to our customers round the clock.
              Whether you have technical questions, need assistance with setup,
              or encounter any issues, our dedicated support team is available
              via call, email, or chat to address your concerns promptly.
            </p>
          </div>
        </div>
      </section>
      <footer>
      <div>Contact Us:</div>
      <div>Email: <a href="mailto:alert@schoolwool.site">alert@schoolwool.site</a></div>
      <div>
        © {new Date().getFullYear()} Little Guardian. All rights reserved. 
        <NavLink to="privacy-policy">Privacy Policy</NavLink>
      </div>
    </footer>
    </div>
  );
}

export default LandingPage;
