import CategoryPage from '../CategoryPage';
import { images } from '../../assets/images';

const featuredContent = [
  {
    id: 1,
    title: 'Major Festivals',
    description: 'Celebrating the grand festivals that unite communities',
    image: images.content.item1,
    author: {
      name: 'Festival Enthusiast',
      avatar: images.profile.default,
    },
    likes: 312,
    comments: 48,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Regional Celebrations',
    description: 'Unique festivals and celebrations across different states',
    image: images.content.item2,
    author: {
      name: 'Cultural Explorer',
      avatar: images.profile.default,
    },
    likes: 256,
    comments: 42,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 3,
    title: 'Festival Traditions',
    description: 'Ancient rituals and customs that make festivals special',
    image: images.content.item3,
    author: {
      name: 'Tradition Keeper',
      avatar: images.profile.default,
    },
    likes: 198,
    comments: 35,
    isLiked: false,
    isSaved: false,
  },
];

const Festivals = () => {
  return (
    <CategoryPage
      category="Festivals"
      description="Experience the vibrant celebrations and traditions of Indian festivals"
      heroImage={images.categories.festivals}
      featuredContent={featuredContent}
    />
  );
};

export default Festivals; 