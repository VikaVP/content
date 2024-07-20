/* eslint-disable react/no-array-index-key */
import { getTranslations } from 'next-intl/server';

import InputContent from '@/components/organism/InputContent';

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

  return (
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
  );
}
