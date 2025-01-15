import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';//backend base url

const ApiService = {
  login: (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials),

  fetchAllMembers: () =>
    axios.get(`${API_BASE_URL}/admin/allMembers`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }),

  addMember: (member) =>
    axios.post(`${API_BASE_URL}/admin/addMember`, member, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }),

  updateMember: (id, member) =>
    axios.put(`${API_BASE_URL}/admin/updateMember/${id}`, member, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }),

  deleteMember: (id) =>
    axios.delete(`${API_BASE_URL}/admin/deleteMember/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }),

  fetchMemberDetails: () =>
    axios.get(`${API_BASE_URL}/member/details`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    }),
};

export default ApiService;
