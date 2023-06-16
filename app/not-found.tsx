import React from 'react';
import { TfiFaceSad } from 'react-icons/tfi';

const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 h-full justify-start items-center pt-8">
      <TfiFaceSad size="24" />
      <h2 className="text-2xl">This post does not exist!</h2>
    </div>
  );
};

export default NotFound;
