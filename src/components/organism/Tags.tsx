/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable react/no-array-index-key */

'use client';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';

export default function Tags({
  name,
  click,
}: {
  name: String;
  click: Function;
}) {
  return (
    <Badge
      variant="secondary"
      className=" cursor-pointer text-[#808080]"
      onClick={async () => await click(name)}
    >
      <Image
        src="/assets/images/tag.svg"
        alt="Clerk"
        width="18"
        height="20"
        className="mr-2"
      />
      {name}
    </Badge>
  );
}
