/* eslint-disable react/no-unescaped-entities */
const PrivacyPolicy = () => {
  const paperStyle = {
    padding: '20px',
    margin: '20px',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left', // Align content to the left
  };

  const headingStyle = {
    marginTop: '20px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    marginBottom: '15px',
  };

  return (
    <div style={paperStyle}>
      <h4 style={headingStyle}>Privacy Policy</h4>
      <p style={paragraphStyle}>Last updated: 5/6/2024</p>
      <p style={paragraphStyle}>
        This Privacy Policy describes how Little Guardian ("we", "us", or "our")
        collects, uses, and shares information collected from users ("you" or
        "your") of the schoolwool.site website ("Website").
      </p>
      <h5 style={headingStyle}>Information Collection and Use</h5>
      <p style={paragraphStyle}>
        When you register on our Website, we may collect personal information
        such as your name, email address, age, and phone number. We may also
        collect additional information depending on your role on the Website.
      </p>
      <h5 style={headingStyle}>Use of Information</h5>
      <p style={paragraphStyle}>
        We may use the information we collect for the following purposes:
      </p>
      <ul>
        <li style={paragraphStyle}>To provide and maintain our services</li>
        <li style={paragraphStyle}>
          To personalize your experience on our Website
        </li>
        <li style={paragraphStyle}>
          To communicate with you about your account or our services
        </li>
        <li style={paragraphStyle}>
          To improve our Website and develop new features
        </li>
        <li style={paragraphStyle}>
          To investigate and resolve issues or disputes
        </li>
        <li style={paragraphStyle}>To record attendance information</li>
      </ul>
      <h5 style={headingStyle}>Attendance Record</h5>
      <p style={paragraphStyle}>
        We collect attendance records that may include information such as
        email, time, location, age, and more, but not limited to these. These
        records are used internally for attendance tracking purposes and may be
        shared1 with authorized users only, such as school administrators and
        teachers, for the purpose of monitoring attendance and ensuring the
        safety of students.
      </p>
      <h5 style={headingStyle}>Information Sharing</h5>
      <p style={paragraphStyle}>
        We may share your information with third-party service providers for the
        purposes of website development and issue resolution. These service
        providers are contractually obligated to use your information only for
        the purposes specified by us and to protect your information in
        accordance with this Privacy Policy.
      </p>
      <h5 style={headingStyle}>Other Product Development</h5>
      <p style={paragraphStyle}>
        Little Guardian may use information collected from schoolwool.site for
        the development of other products or services. However, any such use
        will be done with utmost respect for your privacy and in compliance with
        this Privacy Policy.
      </p>
      <h5 style={headingStyle}>Closure of Accounts</h5>
      <p style={paragraphStyle}>
        If you are a school, teacher, or parent and wish to close your account,
        please contact us at alert@schoolwool.site. Upon closure of your
        account, we will deactivate your account and remove your information
        from our active databases. However, please note that we may retain
        certain information as required by law or for legitimate business
        purposes, such as recordkeeping or to comply with our legal obligations.
      </p>
      <h5 style={headingStyle}>Data Security</h5>
      Unauthorized access carries potential legal consequences, subjecting the
      individual responsible to accountability under applicable court laws. It's
      crucial to underscore that legal liability is individual-focused,
      dissociated from the organizational entities, including Little Guardian or
      the product schoolwool.site. Their technical safeguards are meticulously
      crafted to mitigate unauthorized access. Nonetheless, individuals must
      comply with legal regulations governing data integrity and security."
      
      In case of a data breach, it's essential to clarify that neither Schoolwool
      nor Little Guardian, including their respective company directors or
      shareholders, hold legal liability. Sole responsibility for any breach
      lies with the individual perpetrator. Their robust technical measures aim
      to prevent such incidents. However, it's important to note that
      Schoolwool.site and Little Guardian do not offer a 100% privacy guarantee.
      By using Schoolwool.site or any product of Little Guardian, you agree to
      accept the associated risks.
      <h5 style={headingStyle}>Children's Privacy</h5>
      <p style={paragraphStyle}>
        Our Website is not intended for children under the age of 13, and we do
        not knowingly collect personal information from children under the age
        of 13. If you are a parent or guardian adding your child's details to
        the platform, you are responsible for ensuring the accuracy of the
        information provided and for making any necessary corrections. By adding
        your child's details to the platform, you consent to Little Guardian
        using the information in accordance with this Privacy Policy.
      </p>
      <h5 style={headingStyle}>Changes to this Privacy Policy</h5>
      <p style={paragraphStyle}>
        We may update our Privacy Policy from time to time. Any changes will be
        posted on this page, and the "Last updated" date at the top of the page
        will be revised accordingly. We encourage you to review this Privacy
        Policy periodically for any changes.
      </p>
      <h5 style={headingStyle}>Contact Us</h5>
      <p style={paragraphStyle}>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at alert@schoolwool.site
      </p>
    </div>
  );
};

export default PrivacyPolicy;
