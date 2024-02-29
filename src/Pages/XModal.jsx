import React, { useEffect, useRef, useState } from 'react';
import './XModal.css'

function XModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });
  const [error, setError] = useState('');
  const modalRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { username, email, dob, phone } = formData;
    if (!username || !email || !dob || !phone) {
      setError('Please fill out all fields.');
      return;
    }

    if (!email.includes('@')) {
      setError('Invalid email. Please check your email address.');
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    const currentDate = new Date().toISOString().slice(0, 10);
    if (dob > currentDate) {
      setError('Invalid date of birth. Please enter a past date.');
      return;
    }

    // If all validations pass, reset form, clear error, and close modal
    setFormData({ username: '', email: '', dob: '', phone: '' });
    setError('');
    setShowModal(false);
  };
  const handleClickOutsideModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutsideModal);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideModal);
    };
  }, []);

  return (
    <div >
      <button onClick={() => {setShowModal(true); console.log(showModal);}}>Open Form</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Fill Details</h2>
            <form>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} /><br /><br />
              <label htmlFor="email">Email Address:</label>
              <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} /><br /><br />
              <label htmlFor="phone">Phone Number:</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} /><br /><br />
              <label htmlFor="dob">Date of Birth:</label>
              <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange} /><br /><br />
              <button type="button" className="submit-button" onClick={handleSubmit}>Submit</button>
            </form>
          </div>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default XModal;
