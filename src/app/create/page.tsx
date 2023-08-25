'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    await fetch('/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    setIsLoading(false);

    router.push('/');
  };

  return (
    <>
      <form
        className='mx-auto flex w-[500px] flex-col gap-2 pt-20'
        onSubmit={handleSubmit}
      >
        <h1 className='text-center text-3xl font-extrabold'>Create Post</h1>
        <input
          type='text'
          placeholder='Input title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full rounded-md border p-2 text-black'
        />
        <input
          type='text'
          placeholder='Input Content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='w-full rounded-md border p-2 text-black'
        />
        <button
          disabled={isLoading}
          className='rounded-md bg-emerald-500 px-3 py-2 text-white transition-all hover:bg-white hover:text-black'
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </>
  );
};

export default Page;
