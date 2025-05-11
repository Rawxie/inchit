import CategoryPage from '../CategoryPage';
import { images } from '../../assets/images';

const featuredContent = [
  {
    id: 1,
    title: 'Classical Music Traditions',
    description: 'Exploring the rich heritage of Indian classical music',
    image: images.content.item2,
    author: {
      name: 'Music Enthusiast',
      avatar: images.profile.default,
    },
    likes: 245,
    comments: 38,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Folk Music of India',
    description: 'A journey through the diverse folk music traditions across India',
    image: images.content.item3,
    author: {
      name: 'Folk Music Scholar',
      avatar: images.profile.default,
    },
    likes: 198,
    comments: 42,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 3,
    title: 'Traditional Instruments',
    description: 'The unique musical instruments that define Indian music',
    image: images.content.item4,
    author: {
      name: 'Instrument Collector',
      avatar: images.profile.default,
    },
    likes: 167,
    comments: 29,
    isLiked: false,
    isSaved: false,
  },
];

const Music = () => {
  return (
    <CategoryPage
      category="Music"
      description="Experience the diverse musical traditions of India, from classical to folk"
      heroImage={images.categories.music}
      featuredContent={featuredContent}
    />
  );
};

export default Music; 