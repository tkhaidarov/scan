import React from 'react';
import Image from 'next/image';
import LayoutHero from '@/shared/layout/LayoutHero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import Login from '@/widgets/login/Login';

const Page = () => {
  return (
    <LayoutHero>
      <div className="relative flex flex-1 justify-between">
        <div className="flex max-w-[800px] flex-col pt-5 lg:top-[45px] lg:pt-0">
          <h1 className="text-[40px]">
            для оформления подписки на тариф, необходимо авторизоваться.
            {/*<br className="sm:hidden lg:inline" /> публикаций*/}
            {/*<br className="sm:hidden lg:inline" /> о компании*/}
            {/*<br className="sm:hidden lg:inline" /> по его ИНН*/}
          </h1>
          <div className="relative ml-[112px] h-[343px] w-full max-w-[322px]">
            <Image
              src="/assets/images/illustrations/illustration-login-characters.png"
              alt="Characters login page"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-[430px] flex-1">
          <div className="shadow-card h-[523px] w-[430px] rounded-lg p-[25px_25px_39px]">
            <Tabs defaultValue="signIn">
              <TabsList className="w-full justify-between gap-3.5 bg-transparent">
                <TabsTrigger
                  className="data-[state=active]:border-b-primary2 data-[state=active]:text-primary2 max-w-[150px] rounded-none border-transparent bg-transparent text-[16px] font-normal data-[state=active]:border-b-2 data-[state=active]:shadow-none"
                  value="signIn"
                >
                  Войти
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:border-b-primary2 data-[state=active]:text-primary2 rounded-none border-transparent bg-transparent text-[16px] font-normal data-[state=active]:border-b-2 data-[state=active]:shadow-none"
                  value="signUp"
                >
                  Зарегистрироваться
                </TabsTrigger>
              </TabsList>
              <TabsContent value="signIn">
                <Login />
              </TabsContent>
              <TabsContent value="signUp">Sign up</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </LayoutHero>
  );
};

export default Page;
