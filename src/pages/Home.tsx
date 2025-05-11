import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  Avatar,
  Stack,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  BookmarkBorder,
  Bookmark,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { images } from '../assets/images';

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
    timestamp: '2 hours ago',
    category: 'Architecture',
  },
  {
    id: 2,
    title: 'Classical Music Traditions',
    description: 'Exploring the rich heritage of Indian classical music',
    image: images.content.item2,
    author: {
      name: 'Music Enthusiast',
      avatar: images.profile.default,
    },
    likes: 245,
    comments: 38,
    isLiked: true,
    isSaved: true,
    timestamp: '4 hours ago',
    category: 'Music',
  },
  {
    id: 3,
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
    timestamp: '6 hours ago',
    category: 'Dance',
  },
];

const categories = [
  { name: 'Architecture', image: images.categories.architecture, path: '/category/architecture' },
  { name: 'Music', image: images.categories.music, path: '/category/music' },
  { name: 'Dance', image: images.categories.dance, path: '/category/dance' },
  { name: 'Art', image: images.categories.art, path: '/category/art' },
  { name: 'Literature', image: images.categories.literature, path: '/category/literature' },
  { name: 'Cuisine', image: images.categories.cuisine, path: '/category/cuisine' },
  { name: 'Festivals', image: images.categories.festivals, path: '/category/festivals' },
  { name: 'Crafts', image: images.categories.crafts, path: '/category/crafts' },
];

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const [content, setContent] = React.useState(featuredContent);

  const handleLike = (id: number) => {
    setContent(content.map(item => 
      item.id === id 
        ? { ...item, isLiked: !item.isLiked, likes: item.isLiked ? item.likes - 1 : item.likes + 1 }
        : item
    ));
  };

  const handleSave = (id: number) => {
    setContent(content.map(item => 
      item.id === id 
        ? { ...item, isSaved: !item.isSaved }
        : item
    ));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Stories/Categories */}
      <Box sx={{ mb: 4, overflowX: 'auto' }}>
        <Stack direction="row" spacing={2} sx={{ pb: 2 }}>
          {categories.map((category) => (
            <Box
              key={category.name}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => navigate(category.path)}
            >
              <Avatar
                src={category.image}
                sx={{
                  width: 80,
                  height: 80,
                  border: '3px solid #2E7D32',
                  mb: 1,
                }}
              />
              <Typography variant="caption">{category.name}</Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Feed */}
      <Stack spacing={3}>
        {content.map((item) => (
          <Card key={item.id} sx={{ borderRadius: 2 }}>
            {/* Post Header */}
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <Avatar
                src={item.author.avatar}
                sx={{ width: 40, height: 40, mr: 2 }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2">{item.author.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.timestamp}
                </Typography>
              </Box>
              <IconButton size="small">
                <Share />
              </IconButton>
            </Box>

            {/* Post Image */}
            <CardMedia
              component="img"
              height="400"
              image={item.image}
              alt={item.title}
              sx={{ objectFit: 'cover' }}
            />

            {/* Post Actions */}
            <Box sx={{ p: 1 }}>
              <Stack direction="row" spacing={1}>
                <IconButton onClick={() => handleLike(item.id)}>
                  {item.isLiked ? (
                    <Favorite sx={{ color: 'error.main' }} />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
                <IconButton>
                  <ChatBubbleOutline />
                </IconButton>
                <IconButton>
                  <Share />
                </IconButton>
                <Box sx={{ flex: 1 }} />
                <IconButton onClick={() => handleSave(item.id)}>
                  {item.isSaved ? (
                    <Bookmark sx={{ color: 'primary.main' }} />
                  ) : (
                    <BookmarkBorder />
                  )}
                </IconButton>
              </Stack>
            </Box>

            {/* Post Content */}
            <CardContent sx={{ pt: 0 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                {item.likes} likes
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                <strong>{item.author.name}</strong> {item.description}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                View all {item.comments} comments
              </Typography>
              <Chip
                label={item.category}
                size="small"
                sx={{ mt: 1 }}
              />
            </CardContent>
          </Card>
        ))}
      </Stack>

      {/* Call to Action */}
      {!user && (
        <Box
          sx={{
            textAlign: 'center',
            p: 4,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            mt: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Join Our Community
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Create an account to contribute, share, and preserve India's cultural heritage
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate('/register')}
          >
            Sign Up Now
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Home; 