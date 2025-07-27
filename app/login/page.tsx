import React from 'react';
import LayoutHero from '@/shared/layout/LayoutHero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs';
import Login from '@/widgets/login/Login';
import LockIcon from '@/shared/assets/icons/lock.svg';
import TheImage from '@/shared/components/TheImage';

const Page = () => {
  const imagePath = '/assets/images/illustrations/illustration-login-characters.png';
  const imageAlt = 'Characters login page';
  const imageClassName = 'object-contain';
  const tabsTriggerClassName =
    'data-[state=active]:border-b-primary2 text-muted-foreground border-b-muted-foreground data-[state=active]:text-primary2 rounded-none border-b-2 bg-transparent text-[16px] font-normal data-[state=active]:border-b-2 data-[state=active]:shadow-none';
  return (
    <LayoutHero>
      <div className="relative flex flex-1 flex-col items-center justify-between pt-[30px] pb-[80px] lg:flex-row lg:items-start lg:pt-[69px] lg:pr-[80px]">
        <div className="flex max-w-[800px] flex-col gap-3.5 pt-5 lg:top-[45px]">
          <h1 className="text-[22px] lg:text-[40px]">
            для оформления <br className="sm:hidden lg:inline" />
            подписки на тариф, необходимо авторизоваться.
          </h1>
          <div className="relative hidden h-[343px] w-full max-w-[322px] lg:ml-[112px] lg:block">
            <TheImage src={imagePath} alt={imageAlt} className={imageClassName} />
          </div>
        </div>

        <div className="relative m-[126px_0_49px] max-w-[430px] flex-1 lg:m-0">
          <div className="absolute -top-[81px] left-[81px] h-[92px] w-[75px] lg:-top-[55px] lg:-left-[51px]">
            <LockIcon className="h-full w-full" />
          </div>
          <div className="shadow-card h-[504px] w-[335px] rounded-lg p-[25px_15px_0px] lg:h-[523px] lg:w-[430px] lg:p-[25px_25px_39px]">
            <Tabs defaultValue="signIn">
              <TabsList className="w-full justify-between gap-3.5 bg-transparent">
                <TabsTrigger className={tabsTriggerClassName} value="signIn">
                  Войти
                </TabsTrigger>
                <TabsTrigger className={tabsTriggerClassName} value="signUp">
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
        <div className="relative h-[343px] w-full max-w-[322px] lg:ml-[112px] lg:hidden">
          <TheImage src={imagePath} alt={imageAlt} className={imageClassName} />
        </div>
      </div>
    </LayoutHero>
  );
};

export default Page;
