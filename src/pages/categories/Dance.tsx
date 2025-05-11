import React from 'react';
import CategoryPage from '../CategoryPage';
import { images } from '../../assets/images';

const featuredContent = [
  {
    id: 1,
    title: 'Classical Dance Forms',
    description: 'The eight classical dance forms of India and their unique expressions',
    image: images.content.item3,
    author: {
      name: 'Dance Scholar',
      avatar: images.profile.default,
    },
    likes: 278,
    comments: 45,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Folk Dances',
    description: 'Celebrating the vibrant folk dance traditions across India',
    image: images.content.item4,
    author: {
      name: 'Cultural Explorer',
      avatar: images.profile.default,
    },
    likes: 212,
    comments: 36,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 3,
    title: 'Dance Costumes',
    description: 'The intricate costumes and jewelry that bring Indian dance to life',
    image: images.content.item5,
    author: {
      name: 'Costume Designer',
      avatar: images.profile.default,
    },
    likes: 189,
    comments: 31,
    isLiked: false,
    isSaved: false,
  },
];

const Dance = () => {
  return (
    <CategoryPage
      category="Dance"
      description="Explore the rich traditions of Indian dance, from classical to folk forms"
      heroImage={images.categories.dance}
      featuredContent={featuredContent}
    />
  );
};

export default Dance; 