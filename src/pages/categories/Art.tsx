import React from 'react';
import CategoryPage from '../CategoryPage';
import { images } from '../../assets/images';

const featuredContent = [
  {
    id: 1,
    title: 'Traditional Paintings',
    description: 'The diverse styles of Indian painting from miniature to mural art',
    image: images.content.item4,
    author: {
      name: 'Art Historian',
      avatar: images.profile.default,
    },
    likes: 256,
    comments: 42,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Sculpture Traditions',
    description: 'Ancient and contemporary sculpture art forms across India',
    image: images.content.item5,
    author: {
      name: 'Sculpture Expert',
      avatar: images.profile.default,
    },
    likes: 198,
    comments: 35,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 3,
    title: 'Modern Indian Art',
    description: 'The evolution of Indian art in the contemporary era',
    image: images.content.item6,
    author: {
      name: 'Modern Art Curator',
      avatar: images.profile.default,
    },
    likes: 167,
    comments: 29,
    isLiked: false,
    isSaved: false,
  },
];

const Art = () => {
  return (
    <CategoryPage
      category="Art"
      description="Discover the rich heritage of Indian art forms and their evolution"
      heroImage={images.categories.art}
      featuredContent={featuredContent}
    />
  );
};

export default Art; 