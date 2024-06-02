import './index.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const redirect = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const rediretLogin =(e)=>{
    e.preventDefault();
    navigate('/login')
  }

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
            Hero Say goodbye to fading attendance registers and hello to digital
            efficiency! At Attendance Hero, we cater to every school’s need for
            seamless management of their attendance system.
          </p>
        </div>
      </section>
      <section className='section2'>
        <div className='content'>
          <h2>Why Choose Attendance Hero?</h2>
          <div className='row'>
            <div className='column'>
              <h2>Instant notification</h2>
              <p>
                Parents get notified in real-time if the student is marked
                absent.
              </p>
              <h2>Easy attendance tracking</h2>
              <p>
                Schools can manage attendance with ease, saving time and
                avoiding errors.
              </p>
              <h2>Secure and Reliable</h2>
              <p>
                Details are safe, encrypted, and accessible only to authorised
                users.
              </p>
            </div>
            <div className='column'>
              <h2>Better communication</h2>
              <p>
                Automated attendance reporting to heighten school-parent
                communication.
              </p>
              <h2>Customised solutions</h2>
              <p>Modifiable options to cater to each school’s unique needs.</p>
              <h2>24/7 Support</h2>
              <p>
                Our team is always ready to assist via call, email, or chat.
              </p>
            </div>
          </div>

          <p className='subtext'>
            Register for 3 years and get a free website for your school!
          </p>
          <button className='cta-button' onClick={redirect}>
            Register Now
          </button> 
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
        <strong>How long does it take to set up Attendance Hero for our school?</strong>
      </p>
      <p> Typically, users find it to be a straightforward process, taking no longer than a day. Rest assured, we are dedicated to making the setup experience as seamless as possible for you</p>
    </div>
    <div className='faq'>
      <p>
        <strong>What kind of support do you offer if we encounter any issues?</strong>
      </p>
      <p>We provide comprehensive support to our customers round the clock. Whether you have technical questions, need assistance with setup, or encounter any issues, our dedicated support team is available via call, email, or chat to address your concerns promptly.</p>
    </div>
  </div>
</section>

      <footer>
        <div>Contact Us:</div>
        <div>Email: alert.schoolwool.site</div>
        <div>© {2024} Little Guardian . All rights reserved.</div>
      </footer>
    </div>
  );
}

export default LandingPage;
