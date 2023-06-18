'use client';

import React from 'react';
import { TfiFaceSad } from 'react-icons/tfi';

export default function Error() {
  return (
    <div className="flex flex-col gap-2 h-full justify-start items-center pt-8">
      <TfiFaceSad size="24" />
      <h2 className="text-2xl">There is an error!</h2>
    </div>
  );
}
