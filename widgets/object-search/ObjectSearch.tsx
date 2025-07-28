import React from 'react';
import TitleAndDescription from '@/widgets/object-search/ui/TitleAndDescription';
import DocumentAndFoldersIllustration from '@/widgets/object-search/ui/DocumentAndFoldersIllustration';

const ObjectSearch = () => {
  return (
    <div className="flex w-full flex-col gap-12 lg:p-[69px_0_60px]">
      <div className="flex w-full justify-between">
        <TitleAndDescription />
        <DocumentAndFoldersIllustration />
      </div>
      <div className="flex justify-between">
        <div className="h-[543px] w-[872px] p-[21px_39px_32px_44px]">search block</div>
        <div>image block</div>
      </div>
    </div>
  );
};

export default ObjectSearch;
