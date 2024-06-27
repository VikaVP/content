import { getTranslations } from 'next-intl/server';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function IndexPage() {
  return (
    <>
      <div className="flex h-80 w-full flex-col items-center justify-center bg-black py-8">
        <h1 className="text-[50px] font-bold text-white">
          Discover the best Content
        </h1>
        <h5 className="my-2 text-[#7d7d7d]">
          Explore a curated collection of the latest and greatest articles,
          tutorials, and more.
        </h5>
        <div className="flex w-[33%] items-center justify-center">
          <Input
            placeholder="Enter url"
            className="border-none bg-white outline-none"
          />
          <Button className="ml-2 bg-transparent text-white">Submit</Button>
        </div>
      </div>
      <div className="flex w-full flex-col p-8">
        <div className="flex w-full gap-2">
          <Badge variant="outline">Badge</Badge>
        </div>
      </div>
    </>
  );
}
