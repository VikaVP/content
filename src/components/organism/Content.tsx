/* eslint-disable react/no-array-index-key */

'use client';

import { useState } from 'react';

import Contents from '@/components/organism/ContentLists';
import InputContent from '@/components/organism/InputContent';
import Tags from '@/components/organism/Tags';

export default function Content({ t }: any) {
  const tags = [
    'Design',
    'Development',
    'Productivity',
    'Entrepreneurship',
    'Technology',
  ];
  const [tag, setTag] = useState('');

  const handleClick = async (key: string) => {
    setTag(key);
  };

  return (
    <>
      <div className="flex h-80 w-full flex-col items-center justify-center bg-black py-8">
        <h1 className="text-center text-[26px] font-bold text-white md:text-[50px]">
          {t.title}
        </h1>
        <h5 className="my-2 text-center text-[12px] text-[#7d7d7d] md:text-[16px]">
          {t.description}
        </h5>
        <InputContent
          locale={{
            submit: t.submit,
            error: t.error,
            placeholder: t.placeholder,
          }}
        />
      </div>

      <div className="mt-4 flex w-full flex-col p-8">
        <div className="flex flex-col gap-2 md:flex-row">
          {tags.map((text, index) => (
            <Tags name={text} key={index} click={handleClick} />
          ))}
        </div>
        <Contents keyword={tag} />
      </div>
    </>
  );
}
