import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    // merge className with defualt scale
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
