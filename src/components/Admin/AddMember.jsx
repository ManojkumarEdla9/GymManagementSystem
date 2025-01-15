import React, { useState } from 'react';
import ApiService from '../../services/ApiService';

function AddMember() {
  const [member, setMember] = useState({
    name: '',
    age: '',
    membershipStatus: '',
    registeredOn: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.addMember(member)
      .then((response) => {
        setSuccessMessage('Member added successfully!');
        setErrorMessage('');
        setMember({
          name: '',
          age: '',
          membershipStatus: '',
          registeredOn: '',
        });
      })
      .catch((error) => {
        console.error('Error adding member:', error);
        setErrorMessage('Failed to add member. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <div>
      <h2>Add New Member</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={member.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={member.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Membership Status:</label>
          <input
            type="text"
            name="membershipStatus"
            value={member.membershipStatus}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Registered On:</label>
          <input
            type="date"
            name="registeredOn"
            value={member.registeredOn}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Member</button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default AddMember;
