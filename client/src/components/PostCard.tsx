import React from 'react';
import { Post } from '../Types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAuthState } from '../context/auth';
import axios from 'axios';
import dayjs from 'dayjs';

interface PostCardProps {
  post: Post;
  subMutate?: () => void;
  mutate?: () => void;
}

const PostCard = ({
  post: {
    identifier,
    slug,
    title,
    body,
    subName,
    createdAt,
    updatedAt,
    commentCount,
    voteScore,
    username,
    userVote,
    url,
    sub,
  },
  subMutate,
  mutate,
}: PostCardProps) => {
  const router = useRouter();
  const isInSubPage = router.pathname === '/r/[sub]';
  const authendicated = useAuthState();

  const vote = async (value: number) => {
    if (!authendicated) return router.push('/login');

    if (value === userVote) value = 0;

    try {
      await axios.post('/votes', { identifier, slug, value });
      if (mutate) mutate();
      if (subMutate) subMutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex mb-4 bg-white rounded' id={identifier}>
      <div className='flex-shrink-0 py-2 text-center rounded'>
        {/* 좋아요 부분 */}
        <div
          className='w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-400 hover:text-red-400 flex justify-center'
          onClick={() => vote(1)}
        >
          {userVote === 1 ? <FaArrowUp className='mx-auto text-red-500' /> : <FaArrowUp />}
        </div>
        <p className='text-xs font-bold'>{voteScore}</p>
        {/* 싫어요 부분 */}
        <div
          className='w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-400 hover:text-blue-400 flex justify-center'
          onClick={() => vote(-1)}
        >
          {userVote === -1 ? <FaArrowDown className='mx-auto text-blue-500' /> : <FaArrowDown />}
        </div>
      </div>

      {/* 포스트 데이터 부분 */}
      <div className='w-full p-2'>
        <div className='flex items-center'>
          {!isInSubPage && (
            <div className='flex items-center'>
              <Link href={`/r/${subName}`}>
                <Image
                  src={sub!.imageUrl}
                  alt='sub'
                  className='rounded-full cursor-pointer'
                  width={12}
                  height={12}
                />
              </Link>
              <Link href={`/r/${subName}`} className='ml-2 text-xs font-bold cursor-pointer hover:underline'>
                {subName}
              </Link>
              <span className='mx-1 text-xs text-gray-400'>•</span>
            </div>
          )}

          <p className='text-xs text-gray-400'>
            Posted by
            <Link href={`/u/${username}`} className='mx-1 hover:underline'>
              {username}
            </Link>
            <Link href={url} className='mx-1 hover:underline'>
              {dayjs(createdAt).format('YYYY-MM-DD HH:mm')}
            </Link>
          </p>
        </div>
        <Link href={url} className='my-1 text-lg font-medium'>
          {title}
        </Link>
        {body && <p className='my-1 text-sm'>{body}</p>}
        <div className='flex'>
          <Link href={url}>
            <i className='mr-1 fas fa-comment-alt fa-xs'></i>
            <span>{commentCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
