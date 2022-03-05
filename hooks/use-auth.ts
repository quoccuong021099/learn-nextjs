import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { authApi } from '../api-client';

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: 60 * 60 * 1000, // 1 hour
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      username: 'admin',
      password: 'admin1',
    });
    await mutate();
  }
  async function logout() {
    await authApi.logout();
    await mutate({}, false); // {}: xóa dữ liệu, false: không gọi lại api vì logout rồi gọi có được đâu :v
  }

  return { profile, error, login, logout, firstLoading };
}
