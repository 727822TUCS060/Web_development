import React from 'react';
import lifeInsuranceImage from '../assets/life3.jpg'; // Import the image

const Home = () => {
  return (
    <div className="home">
      <h1><b>AssureLife Insurance Policies</b></h1>
      
        <img src={lifeInsuranceImage} alt="Life Insurance" className="life-insurance-image" />
      
        <h2>Buy Insurance Policies Tailored For You </h2>
      <div className="text-content">
        <div className="paragraph-text">
          <p>Welcome to SecureLife, your trusted partner in financial security. We offer comprehensive and customizable life insurance plans tailored to meet your unique needs. Whether you're looking for term, whole, or universal life insurance, our policies provide extensive coverage options, ensuring peace of mind and financial protection for your loved ones. Our affordable premiums and easy application process make it simple to get covered instantly. With exceptional customer service and a reputation built on trust, SecureLife is the choice of millions. Key features include critical illness riders, child protection, and accidental death benefits. Join us today to experience hassle-free insurance with flexible premiums and reliable support. Secure your future with SecureLife and gain the assurance that your family will be taken care of. Explore our plans, get a quote, and manage your policy online effortlessly. Choose SecureLife for dependable and affordable life.

</p>
<button className="buy-plans-button">Buy Plans</button>
</div>
          
      </div>
      <div className="grid-container">
        <div className="grid-item card">
          <h2>New Tech Term</h2>
          <ul>
            <li>Choose between Level Sum Assured and Increasing Sum Assured.</li>
            <li>Flexible premium options (Single, Regular, Limited), policy term, and the choice to receive benefits in instalments.</li>
          </ul>
          <button className="buy-button">Buy Online</button>
        </div>
        <div className="grid-item card">
          <h2>Jeevan Utsav</h2>
          <ul>
            <li>Guaranteed annual payout of 10% of Sum Assured starts 3-6 years after premium payment term.</li>
            <li>Guaranteed Additions during premium payment term.</li>
          </ul>
          <button className="buy-button">Buy Online</button>
        </div>
        <div className="grid-item card">
          <h2>Amritbal</h2>
          <ul>
            <li>Attractive guaranteed additions offered throughout the policy term for consistent growth.</li>
            <li>Maturity age options between 18-25 years with the flexibility to choose single or limited premium payments.</li>
          </ul>
          <button className="buy-button">Buy Online</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
