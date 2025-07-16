import React from 'react';
import { Button } from '@/shared/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

const ProfileInfo = () => {
  return (
    <div className="hidden h-8 w-28 items-center gap-[2px] md:flex">
      <div className="flex flex-col items-end">
        <span className="text-sm opacity-70">Алексей А.</span>
        <Button variant="link" className="h-3 p-0 text-[10px]">
          Выйти
        </Button>
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfileInfo;
