/* eslint-disable react/no-array-index-key */

import Image from 'next/image';

import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';

const getData = async () => {
  const res = await fetch(
    'https://api.dailymotion.com/videos?search=web+development&limit=9',
  );
  return res.json();
};

export default async function Contents() {
  const datas = await getData();

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
                    <Badge
                      variant="secondary"
                      className=" mr-2 w-max pr-4 text-[#808080]"
                      key={i}
                    >
                      <Image
                        src="/assets/images/tag.svg"
                        alt="Clerk"
                        width="18"
                        height="20"
                        className="mr-2"
                      />
                      {data.channel}
                    </Badge>
                  ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
