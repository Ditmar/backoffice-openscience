import React, { useState } from 'react';
import type { IProps } from './types/IProps';
import './UserForm.scss';

function UserForm({ onSubmit }: IProps) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username" // Agregado para consistencia
          value={formData.username}
          placeholder="Enter your username"
          minLength={6}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email" // Agregado para consistencia
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password" // Agregado para consistencia
          value={formData.password}
          placeholder="Enter your password"
          minLength={6}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="role" // Agregado para consistencia
          value={formData.role}
          placeholder="Enter your role"
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
}

export default UserForm;
