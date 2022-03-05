import { useRouter } from 'next/router';
import * as React from 'react';
import { useAuth } from '../hooks';

export default function LoginPage() {
  const router = useRouter();
  const { profile, login } = useAuth({ revalidateOnMount: false });

  const handleLoginClick = async () => {
    try {
      await login();
      console.log('redirect dashboard page');
      await router.push('/about');
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={() => router.push('/about')}>go to about page</button>
    </div>
  );
}
