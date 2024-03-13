import React, { useState, FunctionComponent } from "react";
import emailjs from 'emailjs-com'; 
import styles from "./ComingSoonSection.module.css";

const ComingSoonSection: FunctionComponent = () => {
  const [email, setEmail] = useState(''); 

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value); 
  }; 

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const SERVICE_ID = 'service_9vw2bd6'; 
    const TEMPLATE_ID = 'template_5wbo8df'; 
    const USER_ID = 'W_8m8qzkKNOYTAETS'; 

    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_name: "ZK Reputation Overlords", 
      from_name: email,
      message: "Please add me to your email list"
    }, USER_ID)
    .then((result) => {
        console.log(result.text);
        alert('Email successfully sent!');
        setEmail(''); // Clear the email field
    }, (error) => {
        console.log(error.text);
        alert('Failed to send the email. Please try again.');
    });
  };

  return (
    <div className={styles.comingSoonSection8}>
      <div className={styles.comingSoonSection8Item} />
      <div className={styles.comingSoonSection8Inner} />
      <b className={styles.logo}>zkReputation</b>
      <div className={styles.comingSoon}>Coming soon</div>
      <div className={styles.getNotifiedWhenContainer}>
        <p className={styles.getNotified}>GET NOTIFIED</p>
        <p className={styles.getNotified}>{`WHEN WE `}</p>
        <p className={styles.getNotified}>WILL LAUNCH!</p>
      </div>
      {/* Replace this part with a form for email subscription */}
      <form onSubmit={handleSubmit} className={styles.bar}>
        {/* Input for email */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className={styles.enterYourEmailInput}
        />
        {/* Submit button */}
        <button type="submit" className={styles.subscribeButton}>Subscribe</button>
      </form>
      <img
        className={styles.businessmanExcitedToLaunch}
        alt=""
        src="/businessman-excited-to-launch-new-project.svg"
      />
    </div>
  );
};

export default ComingSoonSection;