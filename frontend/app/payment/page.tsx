import React from 'react';

const PaymentPage = () => {
    const handlePayment = (method) => {
        // Handle payment processing logic here
        alert(`Payment initiated through ${method}`);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Payment Options</h1>
            <h2>Choose your payment method</h2>
            <div>
                <h3>PhonePe</h3>
                <p>Enter amount: <input type='number' placeholder='Amount' /></p>
                <button onClick={() => handlePayment('PhonePe')}>Pay with PhonePe</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>WhatsApp</h3>
                <p>Enter amount: <input type='number' placeholder='Amount' /></p>
                <button onClick={() => handlePayment('WhatsApp')}>Pay with WhatsApp</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h3>Transaction Details</h3>
                <p>Date: {new Date().toUTCString()}</p>
            </div>
        </div>
    );
};

export default PaymentPage;