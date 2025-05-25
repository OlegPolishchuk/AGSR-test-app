import React from 'react';
import { UserData } from './user-data';

export const Header = () => {
  return (
    <header className={'min-h-[70px] flex items-center border-b'}>
      <div className={'container flex items-center'}>
        <UserData />
      </div>
    </header>
  );
};
