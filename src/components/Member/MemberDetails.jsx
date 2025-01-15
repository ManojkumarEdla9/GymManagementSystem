import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';

function MemberDetails() {
  const [member, setMember] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    ApiService.fetchMemberDetails()
      .then((response) => setMember(response.data))
      .catch((error) => {
        console.error('Error fetching member details:', error);
        setError('Failed to fetch member details. Please try again later.');
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Member Details</h2>
      <p><strong>Name:</strong> {member.name}</p>
      <p><strong>Age:</strong> {member.age}</p>
      <p><strong>Membership Status:</strong> {member.membershipStatus}</p>
      <p><strong>Registered On:</strong> {member.registeredOn}</p>
    </div>
  );
}

export default MemberDetails;
