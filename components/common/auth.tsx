import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect } from 'react';

export interface AuthProps {
  children: any;
}

export default function Auth({ children }: AuthProps) {
  const router = useRouter();

  const { profile, firstLoading }: any = useAuth();

  useEffect(() => {
    if (!firstLoading && !profile?.username) {
      router.push('/login');
    }
  }, [router, profile, firstLoading]);

  if (!profile?.username) return <div>Loading...</div>;

  return <div>{children}</div>;
}
