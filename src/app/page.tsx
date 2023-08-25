import { Post } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import Item from './components/Item';

const getPosts = async () => {
  const res = await fetch(process.env.BASE_URL + '/api/post', {
    next: { revalidate: 0 },
  });
  const json = await res.json();
  return json;
};

const Page = async () => {
  const posts = await getPosts();

  return (
    <div className='mx-auto w-[1000px] pt-24'>
      <Link
        href='/create'
        className='rounded-md bg-emerald-500 px-3 py-2 text-white transition-all hover:bg-white hover:text-black'
      >
        Create
      </Link>
      <div className='mt-8 flex flex-col gap-4'>
        {posts?.posts?.map((post: any, i: number) => (
          <Item key={i} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Page;
