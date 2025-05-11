import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Stack,
  Chip,
} from '@mui/material';
import {
  Search as SearchIcon,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
} from '@mui/icons-material';
import { images } from '../assets/images';

// Mock data for content
const mockContent = [
  {
    id: 1,
    title: 'Ancient Temple Architecture',
    description: 'A detailed study of temple architecture in South India',
    image: images.content.item1,
    category: 'Architecture',
    author: {
      name: 'Heritage Explorer',
      avatar: images.profile.default,
    },
    likes: 234,
    comments: 45,
    isLiked: false,
  },
  {
    id: 2,
    title: 'Traditional Folk Music',
    description: 'Collection of rare folk music recordings',
    image: images.content.item2,
    category: 'Music',
    author: {
      name: 'Music Enthusiast',
      avatar: images.profile.default,
    },
    likes: 189,
    comments: 32,
    isLiked: true,
  },
  {
    id: 3,
    title: 'Classical Dance Forms',
    description: 'Learn about the various classical dance forms of India',
    image: images.content.item3,
    category: 'Dance',
    author: {
      name: 'Dance Scholar',
      avatar: images.profile.default,
    },
    likes: 156,
    comments: 28,
    isLiked: false,
  },
  {
    id: 4,
    title: 'Traditional Art',
    description: 'Exploring the rich traditions of Indian art',
    image: images.content.item4,
    category: 'Art',
    author: {
      name: 'Art Historian',
      avatar: images.profile.default,
    },
    likes: 145,
    comments: 23,
    isLiked: false,
  },
  {
    id: 5,
    title: 'Literary Heritage',
    description: 'Discovering ancient Indian literature',
    image: images.content.item5,
    category: 'Literature',
    author: {
      name: 'Book Lover',
      avatar: images.profile.default,
    },
    likes: 132,
    comments: 19,
    isLiked: true,
  },
  {
    id: 6,
    title: 'Traditional Crafts',
    description: 'The art of traditional Indian craftsmanship',
    image: images.content.item6,
    category: 'Crafts',
    author: {
      name: 'Craft Enthusiast',
      avatar: images.profile.default,
    },
    likes: 178,
    comments: 31,
    isLiked: false,
  },
];

const categories = [
  'All',
  'Architecture',
  'Music',
  'Dance',
  'Art',
  'Literature',
  'Cuisine',
  'Festivals',
  'Crafts',
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [content, setContent] = React.useState(mockContent);

  const handleLike = (id: number) => {
    setContent(content.map(item => 
      item.id === id 
        ? { ...item, isLiked: !item.isLiked, likes: item.isLiked ? item.likes - 1 : item.likes + 1 }
        : item
    ));
  };

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Search and Filter Section */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search content..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />
        <Stack direction="row" spacing={1} sx={{ overflowX: 'auto', pb: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? 'primary' : 'default'}
              sx={{ minWidth: 'fit-content' }}
            />
          ))}
        </Stack>
      </Box>

      {/* Content Grid */}
      <Grid container spacing={3}>
        {filteredContent.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ borderRadius: 2, height: '100%' }}>
              <CardMedia
                component="img"
                height="300"
                image={item.image}
                alt={item.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={item.author.avatar}
                    sx={{ width: 32, height: 32, mr: 1 }}
                  />
                  <Typography variant="subtitle2">{item.author.name}</Typography>
                </Box>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Stack direction="row" spacing={1}>
                    <IconButton size="small" onClick={() => handleLike(item.id)}>
                      {item.isLiked ? (
                        <Favorite sx={{ color: 'error.main', fontSize: 20 }} />
                      ) : (
                        <FavoriteBorder sx={{ fontSize: 20 }} />
                      )}
                    </IconButton>
                    <IconButton size="small">
                      <ChatBubbleOutline sx={{ fontSize: 20 }} />
                    </IconButton>
                    <IconButton size="small">
                      <Share sx={{ fontSize: 20 }} />
                    </IconButton>
                  </Stack>
                  <Chip
                    label={item.category}
                    size="small"
                  />
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  {item.likes} likes • {item.comments} comments
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Explore; 