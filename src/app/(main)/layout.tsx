import { Header } from '@/components/header/header';
import { UserProvider } from '@/providers/user-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <Header />
      {children}
    </UserProvider>
  );
}
