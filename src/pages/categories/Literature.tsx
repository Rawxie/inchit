import CategoryPage from '../CategoryPage';
import { images } from '../../assets/images';

const featuredContent = [
  {
    id: 1,
    title: 'Ancient Texts',
    description: 'Exploring the wisdom of ancient Indian literature and scriptures',
    image: images.content.item5,
    author: {
      name: 'Literature Scholar',
      avatar: images.profile.default,
    },
    likes: 245,
    comments: 38,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Poetry Traditions',
    description: 'The rich heritage of Indian poetry across different languages',
    image: images.content.item6,
    author: {
      name: 'Poetry Enthusiast',
      avatar: images.profile.default,
    },
    likes: 198,
    comments: 42,
    isLiked: true,
    isSaved: true,
  },
  {
    id: 3,
    title: 'Modern Literature',
    description: 'Contemporary Indian literature and its global impact',
    image: images.content.item1,
    author: {
      name: 'Book Critic',
      avatar: images.profile.default,
    },
    likes: 178,
    comments: 31,
    isLiked: false,
    isSaved: false,
  },
];

const Literature = () => {
  return (
    <CategoryPage
      category="Literature"
      description="Journey through the vast landscape of Indian literary traditions"
      heroImage={images.categories.literature}
      featuredContent={featuredContent}
    />
  );
};

export default Literature; 