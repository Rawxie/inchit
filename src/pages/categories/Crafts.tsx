import React from 'react';
import CategoryPage from '../CategoryPage';
import { images } from '../../assets/images';

const featuredContent = [
  {
    id: 1,
    title: 'Traditional Crafts',
    description: 'The ancient art of Indian handicrafts and their techniques',
    image: images.content.item2,
    author: {
      name: 'Craft Historian',
      avatar: images.profile.default,
    },
    likes: 267,
    comments: 42,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Artisan Communities',
    description: 'The skilled craftsmen keeping traditions alive',
    image: images.content.item3,
    author: {
      name: 'Cultural Anthropologist',
      avatar: images.profile.default,
    },
    likes: 223,
    comments: 38,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 3,
    title: 'Modern Craft Revival',
    description: 'Contemporary interpretations of traditional crafts',
    image: images.content.item4,
    author: {
      name: 'Design Innovator',
      avatar: images.profile.default,
    },
    likes: 189,
    comments: 31,
    isLiked: false,
    isSaved: false,
  },
];

const Crafts = () => {
  return (
    <CategoryPage
      category="Crafts"
      description="Discover the intricate world of Indian handicrafts and artisanal traditions"
      heroImage={images.categories.crafts}
      featuredContent={featuredContent}
    />
  );
};

export default Crafts; 