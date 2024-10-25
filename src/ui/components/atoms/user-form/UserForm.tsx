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
        <span className="input-label">Username</span>

        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          placeholder="Enter your username"
          minLength={6}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <span className="input-label">Username</span>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <span className="input-label">Username</span>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          minLength={6}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <span className="input-label">Username</span>
        <input
          type="text"
          id="role"
          name="role"
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
