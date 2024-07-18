import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    bookingDate: '',
    purchase: false,
    purchaseOption: '',
    downPayment: '',
    financingOption: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8080/api/v1/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      if (data.id) {
        setMessage('Booking successful!');
        // Clear the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          carModel: '',
          bookingDate: '',
          purchase: false,
          purchaseOption: '',
          downPayment: '',
          financingOption: '',
        });
      } else {
        setMessage('Booking failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    });
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      carModel: '',
      bookingDate: '',
      purchase: false,
      purchaseOption: '',
      downPayment: '',
      financingOption: '',
    });
  };

  const handlePurchaseChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="booking-form-container">
      <h2>Book or Buy a Car</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Car Model:
          <input type="text" name="carModel" value={formData.carModel} onChange={handleChange} required />
        </label>
        <label>
          Booking Date:
          <input type="date" name="bookingDate" value={formData.bookingDate} onChange={handleChange} required />
        </label>
        <label>
          <input type="checkbox" name="purchase" checked={formData.purchase} onChange={handleChange} />
          I want to buy this car
        </label>
        {formData.purchase && (
          <div>
            <label>
              Purchase Option:
              <select name="purchaseOption" value={formData.purchaseOption} onChange={handlePurchaseChange} required>
                <option value="">Select an option</option>
                <option value="outright">Outright Purchase</option>
                <option value="finance">Finance</option>
              </select>
            </label>
            {formData.purchaseOption === 'finance' && (
              <label>
                Down Payment:
                <input type="number" name="downPayment" value={formData.downPayment} onChange={handlePurchaseChange} required />
              </label>
            )}
            {formData.purchaseOption === 'finance' && (
              <label>
                Financing Option:
                <input type="text" name="financingOption" value={formData.financingOption} onChange={handlePurchaseChange} required />
              </label>
            )}
          </div>
        )}
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BookingForm;
