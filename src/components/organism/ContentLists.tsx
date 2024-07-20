/* eslint-disable react/no-array-index-key */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { Card, CardContent } from '../ui/card';
import Tags from './Tags';

const getData = async (keyword: string) => {
  const res = await fetch(
    `https://api.dailymotion.com/videos?search=${keyword}&limit=9`,
  );
  return res.json();
};

export default function Contents({ keyword }: { keyword: string }) {
  const [datas, setDatas] = useState<any>({});

  const fetchDatas = async (text: string) => {
    const fetch = await getData(text);
    setDatas(fetch);
  };

  useEffect(() => {
    fetchDatas(keyword || 'Computer');
  }, [keyword]);
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-1 md:grid-cols-3">
      {datas?.list?.map((data: ContentLists, ind: number) => {
        return (
          <Card className="border-0 shadow-lg" key={ind}>
            <div
              className=" h-[200px] w-full bg-no-repeat object-cover"
              style={{
                backgroundImage: `url(https://picsum.photos/id/${ind + 1}/800/400)`,
              }}
            />
            <div className="mb-2 mt-4 px-6">
              <h2 className="mb-1 font-bold">{data.title}</h2>
              <div className="flex">
                <div className="mr-3 flex items-center">
                  <Image
                    src="/assets/images/user.svg"
                    alt="Clerk"
                    width="14"
                    height="14"
                    className="mr-1"
                  />
                  <span className="text-xs text-[#808080]">{data.owner}</span>
                </div>
                <div className="mr-3 flex items-center">
                  <Image
                    src="/assets/images/eye.svg"
                    alt="Clerk"
                    width="14"
                    height="14"
                    className="mr-1"
                  />
                  <span className="text-xs text-[#808080]">{data.id}</span>
                </div>
              </div>
            </div>
            <CardContent>
              <p className=" mb-2 text-sm font-semibold text-[#808080]">
                {data.title}
              </p>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {new Array(Math.floor(Math.random() * 4) + 2)
                  .fill(1)
                  .map((i: number) => (
                    <Tags name={data.channel} key={i} click={() => false} />
                  ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
