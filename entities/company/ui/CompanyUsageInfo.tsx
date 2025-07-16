import React from 'react';
import { ICompanyUsageInfo } from '../types/types';

const CompanyUsageInfo = () => {
  return (
    <div className="relative flex h-[75px] w-[132px] items-center rounded-sm bg-zinc-300/30 px-2.5 md:h-16 md:w-44 md:justify-center md:px-0">
      <div className="flex flex-col gap-2">
        <UsageInfo label="Использовано компаний" count={100} />
        <UsageInfo label="Лимит по компаниям" count={30} style="text-lime-500" />
      </div>
    </div>
  );
};

export default CompanyUsageInfo;

const UsageInfo = ({ label, count, style }: ICompanyUsageInfo) => {
  return (
    <div className="flex w-full flex-col items-start gap-1 md:flex-row md:items-center md:gap-2">
      <span className="text-foreground/40 flex-1 text-[8px] font-normal md:text-right md:text-[10px]">
        {label}
      </span>
      <span className={`text-[14px] ${style || ''} w-7 font-bold md:self-start`}>{count}</span>
    </div>
  );
};
