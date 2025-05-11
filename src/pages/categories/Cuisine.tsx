import React from 'react';
import CategoryPage from '../CategoryPage';
import { images } from '../../assets/images';

const featuredContent = [
  {
    id: 1,
    title: 'Regional Cuisines',
    description: 'Exploring the diverse culinary traditions across India',
    image: images.content.item6,
    author: {
      name: 'Food Historian',
      avatar: images.profile.default,
    },
    likes: 289,
    comments: 45,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Traditional Recipes',
    description: 'Ancient cooking techniques and authentic recipes',
    image: images.content.item1,
    author: {
      name: 'Master Chef',
      avatar: images.profile.default,
    },
    likes: 234,
    comments: 38,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 3,
    title: 'Food Culture',
    description: 'The cultural significance of food in Indian traditions',
    image: images.content.item2,
    author: {
      name: 'Cultural Food Expert',
      avatar: images.profile.default,
    },
    likes: 198,
    comments: 32,
    isLiked: false,
    isSaved: false,
  },
];

const Cuisine = () => {
  return (
    <CategoryPage
      category="Cuisine"
      description="Savor the rich flavors and traditions of Indian culinary heritage"
      heroImage={images.categories.cuisine}
      featuredContent={featuredContent}
    />
  );
};

export default Cuisine; 