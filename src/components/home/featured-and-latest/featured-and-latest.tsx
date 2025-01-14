import { ProductsWithFourCards } from '@/components/product';
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import { productList } from '@/utils';

export const FeaturedAndLatest = () => {
  return (
    <Tabs defaultValue='featured'>
      <TabsList className='flex items-center gap-4 mb-16'>
        <TabsTrigger
          value='featured'
          asChild
          className='shadow-none rounded-full'
        >
          <Button className='rounded-full w-24' variant='outline' size='sm'>
            Featured
          </Button>
        </TabsTrigger>
        <TabsTrigger
          value='latest'
          asChild
          className='shadow-none rounded-full'
        >
          <Button className='rounded-full w-24' variant='outline' size='sm'>
            Latest
          </Button>
        </TabsTrigger>
      </TabsList>

      <TabsContent value='featured'>
        <ProductsWithFourCards products={productList} />
      </TabsContent>

      <TabsContent value='latest'>
        <ProductsWithFourCards products={productList.toReversed()} />
      </TabsContent>
    </Tabs>
  );
};
