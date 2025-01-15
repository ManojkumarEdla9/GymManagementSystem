import React, { useState } from 'react';
import ApiService from '../../services/ApiService';

function UpdateMember({ memberId }) {
  const [memberDetails, setMemberDetails] = useState({
    name: '',
    age: '',
    membershipStatus: '',
    registeredOn: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMemberDetails({ ...memberDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    ApiService.updateMember(memberId, memberDetails)
      .then((response) => {
        alert('Member updated successfully!');
        console.log(response.data);
      })
      .catch((error) => console.error('Error updating member:', error));
  };

  return (
    <div>
      <h2>Update Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={memberDetails.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={memberDetails.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="membershipStatus"
          placeholder="Membership Status"
          value={memberDetails.membershipStatus}
          onChange={handleChange}
        />
        <input
          type="date"
          name="registeredOn"
          placeholder="Registered On"
          value={memberDetails.registeredOn}
          onChange={handleChange}
        />
        <button type="submit">Update Member</button>
      </form>
    </div>
  );
}

export default UpdateMember;
