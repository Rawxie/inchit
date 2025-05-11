import CategoryPage from '../CategoryPage';
import { images } from '../../assets/images';

const featuredContent = [
  {
    id: 1,
    title: 'Ancient Temple Architecture',
    description: 'A detailed study of temple architecture in South India',
    image: images.content.item1,
    author: {
      name: 'Heritage Explorer',
      avatar: images.profile.default,
    },
    likes: 234,
    comments: 45,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Mughal Architecture',
    description: 'The magnificent architectural legacy of the Mughal Empire',
    image: images.content.item2,
    author: {
      name: 'History Buff',
      avatar: images.profile.default,
    },
    likes: 189,
    comments: 32,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 3,
    title: 'Colonial Architecture',
    description: 'British and Portuguese influences on Indian architecture',
    image: images.content.item3,
    author: {
      name: 'Architectural Scholar',
      avatar: images.profile.default,
    },
    likes: 156,
    comments: 28,
    isLiked: false,
    isSaved: false,
  },
];

const Architecture = () => {
  return (
    <CategoryPage
      category="Architecture"
      description="Discover the rich architectural heritage of India, from ancient temples to colonial buildings"
      heroImage={images.categories.architecture}
      featuredContent={featuredContent}
    />
  );
};

export default Architecture; 