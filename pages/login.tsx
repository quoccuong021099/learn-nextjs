import * as React from 'react';
import { authApi } from '../api-client';

export default function LoginPage() {
  const handleLoginClick = async () => {
    try {
      await authApi.login({
        username: 'cuong',
        password: '123456',
      });
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  };
  const handleProfileClick = async () => {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('Failed to get profile: ', error);
    }
  };
  const handleLogoutClick = async () => {
    try {
      await authApi.logout();
    } catch (error) {
      console.log('Failed to logout: ', error);
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleProfileClick}>Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
