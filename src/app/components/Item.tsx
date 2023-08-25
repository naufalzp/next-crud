'use client';
import { Post } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  post: Post;
}

const Item = ({ post }: Props) => {
  const router = useRouter();
  const handleDelete = async (id: number) => {
    await fetch('/api/post?id=' + id, {
      method: 'DELETE',
    });
    router.refresh();
  };

  return (
    <div className='rounded-md border p-4'>
      <h2 className='text-sm text-gray-400'>ID: {post.id}</h2>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className='mt-4 inline-flex gap-4'>
        <button
          onClick={() => router.push(`/update/${post.id}`)}
          className='rounded-md bg-orange-400 px-3 py-2 text-black transition-all hover:bg-white'
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(post.id)}
          className='rounded-md bg-red-600 px-3 py-2 text-black transition-all hover:bg-white'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
