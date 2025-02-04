import React, { useState } from 'react';
import { HeartHandshake, MessageSquareMore } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactSheet from './ContactSheet';
import CommentsSheet from './CommentsSheet';
import { sampleComments } from '../data/sampleComments';
import type { Post as PostType } from '../types/post';

type PostProps = PostType;

export default function Post({ 
  id,
  image, 
  title, 
  price, 
  username,
  avatar,
  likes, 
  comments,
  isSponsored
}: PostProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const navigate = useNavigate();

  const handlePostClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest('button') ||
      target.tagName.toLowerCase() === 'button'
    ) {
      return;
    }
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div 
        className={`
          bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer 
          transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md
          ${isSponsored ? 'ring-2 ring-blue-500/20' : ''}
        `}
        onClick={handlePostClick}
      >
        <div className="relative">
          <img src={image} alt={title} className="w-full aspect-square object-cover" />
          
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-lg">
            <span className="font-semibold text-blue-600 text-xs sm:text-sm">₼{price}</span>
          </div>

          {isSponsored && (
            <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium">
              Endirim mövcuddur
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2">{title}</h3>
          
          <div className="flex items-center space-x-4">
            <button 
              className="flex items-center space-x-1.5 group"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-1.5 rounded-full bg-rose-50 group-hover:bg-rose-100 transition-colors">
                <HeartHandshake className="w-4 h-4 text-rose-500" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-rose-500 transition-colors">{likes}</span>
            </button>
            
            <button 
              className="flex items-center space-x-1.5 group"
              onClick={(e) => {
                e.stopPropagation();
                setIsCommentsOpen(true);
              }}
            >
              <div className="p-1.5 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <MessageSquareMore className="w-4 h-4 text-blue-500" />
              </div>
              <span className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">{comments}</span>
            </button>
          </div>
        </div>
      </div>

      <ContactSheet
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        username={username}
        avatar={avatar}
      />

      <CommentsSheet
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        comments={sampleComments}
      />
    </>
  );
}