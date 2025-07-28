import React from 'react';
import DocumentIcon from '@/shared/assets/icons/document.svg';
import FoldersIcon from '@/shared/assets/icons/folders.svg';

const DocumentAndFoldersIllustration = () => {
  return (
    <div className="flex gap-[166px] pt-[63px] pr-11">
      <div className="h-[112px] w-[91px]">
        <DocumentIcon className="h-full w-full" />
      </div>
      <div className="hidden lg:block lg:h-[69px] lg:w-[141px]">
        <FoldersIcon className="h-full w-full" />
      </div>
    </div>
  );
};

export default DocumentAndFoldersIllustration;
