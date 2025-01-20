import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui';
import { EmptyStarIcon, MoreIcon, StarIcon } from '@/icons';

type ProductTabsProps = {
  description: string;
};

export const ProductTabs = ({ description }: ProductTabsProps) => {
  return (
    <Tabs className='grid grid-cols-6 gap-16' defaultValue='details'>
      <TabsList className='flex flex-col items-start col-span-1 gap-4 py-16 h-max'>
        <TabsTrigger value='details' asChild>
          <Button variant='ghost'>
            <MoreIcon /> Details
          </Button>
        </TabsTrigger>
        <TabsTrigger value='reviews' asChild>
          <Button variant='ghost'>
            <EmptyStarIcon /> Reviews
          </Button>
        </TabsTrigger>
      </TabsList>

      <TabsContent value='details' className='col-span-5 space-y-8'>
        <h5>Details</h5>
        <div
          dangerouslySetInnerHTML={{ __html: description }}
          className='space-y-4 text-muted-foreground'
        />
      </TabsContent>
      <TabsContent value='reviews' className='col-span-5 space-y-8'>
        <h5>Reviews</h5>

        <div className='flex items-center gap-2 text-xs'>
          <h2>4.2</h2>
          <div className='w-2 h-0.5 bg-gray-400' />
          <span className='text-muted-foreground'>54 Reviews</span>
        </div>

        <Button variant='outline'>Write review</Button>

        <div className='flex flex-col w-full gap-4'>
          <>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='Avatar' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='w-full space-y-3'>
              <div className='flex items-center justify-between'>
                <h6>Emily Davis</h6>
                <div className='flex items-center'>
                  {'<StarIcon />'.repeat(5)}
                  <EmptyStarIcon />
                </div>
              </div>

              <span className='text-muted-foreground'>23 APRIL</span>

              <p className='text-muted-foreground'>
                This company always goes above and beyond to satisfy their
                customers.
              </p>
            </div>
          </>

          <>
            <Avatar>
              <AvatarImage src='https://github.com/shadcn.png' alt='Avatar' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className='w-full space-y-3'>
              <div className='flex items-center justify-between'>
                <h6>Emily Davis</h6>
                <div className='flex items-center'>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <EmptyStarIcon />
                </div>
              </div>

              <span className='text-muted-foreground'>23 APRIL</span>

              <p className='text-muted-foreground'>
                This company always goes above and beyond to satisfy their
                customers.
              </p>
            </div>
          </>

          <Button variant='outline' className='mx-auto mt-16 w-max'>
            Load more reviews
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
};
