import { useAuth } from '@/hooks/use-auth';
import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Auth from '../common/auth';

export default function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    await logout();
    router.push('/login');
  }

  return (
    <Auth>
      <h1>AdminLayout</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      &nbsp;
      <Link href="/about">
        <a>about</a>
      </Link>
      &nbsp;
      <button onClick={handleLogoutClick}>Logout</button>
      <br />
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <div>{children}</div>
    </Auth>
  );
}
