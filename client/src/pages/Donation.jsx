import React, { useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_CHECKOUT } from '../utlis/queries';
import { useEffect } from 'react';
import Auth from '../utlis/auth';
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const Donation = () => {
  const [donationAmount, setDonationAmount] = useState(0);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  const handleInputChange = (e) => {
    setDonationAmount(e.target.value);
  };


  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const handleSubmit = () => {
    console.log(Auth.loggedIn())
    if(Auth.loggedIn){
      getCheckout(
        {
          variables: {
            donation: {
              amount: parseInt(donationAmount)
            }
          }
        }
      )
    }
    else{
      alert("You must be logged in to make a donation!")
    }
    
    
  };

  return (
    <div className="donation ">
      <div className="donation-container ">
        <div className="donation-title">Donation</div>
        <div>
          <label htmlFor="donationAmount">$  </label>
          <input
            id="donationAmount"
            type="number"
            value={donationAmount}
            onChange={handleInputChange}
          />
        </div>
        <button 
        className="donation-btn ring-2 ring-blue-500" 
        onClick={handleSubmit}>Confirm Donation!</button>
      </div>
    </div>
  );
};

export default Donation;
