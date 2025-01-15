import React, { useEffect, useState } from 'react';
import ApiService from '../../services/ApiService';

function AllMembers() {
  const [members, setMembers] = useState([]); // Initialize 'members' as an empty array
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch members from the API
    ApiService.fetchAllMembers()
      .then((response) => setMembers(response.data)) // Set the members state with the fetched data
      .catch((error) => {
        console.error('Error fetching members:', error);
        setError('Failed to fetch members. Please try again later.');
      });
  }, []);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>; // Display error message if there's an error
  }

  return (
    <div>
      <h2>All Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <strong>{member.name}</strong> - {member.age} years old - {member.membershipStatus}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllMembers;
