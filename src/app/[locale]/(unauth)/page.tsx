/* eslint-disable react/no-array-index-key */
import { getTranslations } from 'next-intl/server';

import Content from '@/components/organism/Content';

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
    <Content
      t={{
        title: t('title'),
        description: t('description'),
        submit: t('submit'),
        error: t('error_search'),
        placeholder: t('placeholder'),
      }}
    />
  );
}
