/* eslint-disable react/no-array-index-key */
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import Contents from '@/components/organism/ContentLists';
import InputContent from '@/components/organism/InputContent';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Content',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function IndexPage(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Content',
  });
  const tags = [
    'Design',
    'Development',
    'Productivity',
    'Entrepreneurship',
    'Technology',
  ];

  return (
    <>
      <div className="flex h-80 w-full flex-col items-center justify-center bg-black py-8">
        <h1 className="text-center text-[26px] font-bold text-white md:text-[50px]">
          {t('title')}
        </h1>
        <h5 className="my-2 text-center text-[12px] text-[#7d7d7d] md:text-[16px]">
          {t('description')}
        </h5>
        <InputContent
          locale={{
            submit: t('submit'),
            error: t('error_search'),
            placeholder: t('placeholder'),
          }}
        />
      </div>
      <div className="mt-4 flex w-full flex-col p-8">
        <div className="flex flex-col gap-2 md:flex-row">
          {tags.map((tag, index) => (
            <Badge variant="secondary" className=" text-[#808080]" key={index}>
              <Image
                src="/assets/images/tag.svg"
                alt="Clerk"
                width="18"
                height="20"
                className="mr-2"
              />
              {tag}
            </Badge>
          ))}
        </div>
        <Contents />
      </div>
    </>
  );
}
