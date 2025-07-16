import React from 'react';
import { Button } from '@/shared/ui/button';

const Authorization = () => {
  return (
    <div className="flex flex-col items-center gap-5 md:flex-row md:gap-4.5">
      <Button variant="link" className="px-0 font-normal">
        Зарегистрироваться
      </Button>
      <div className="md:bg-primary2 hidden md:block md:h-[26px] md:w-[2px]"></div>
      <Button variant="secondary" className="md:h-[26px] md:w-[65px]">
        Войти
      </Button>
    </div>
  );
};

export default Authorization;
