import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
  IconButton,
  Avatar,
  Button,
} from '@mui/material';
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  BookmarkBorder,
  Bookmark,
} from '@mui/icons-material';

interface CategoryPageProps {
  category: string;
  description: string;
  heroImage: string;
  featuredContent: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    author: {
      name: string;
      avatar: string;
    };
    likes: number;
    comments: number;
    isLiked: boolean;
    isSaved: boolean;
  }>;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  description,
  heroImage,
  featuredContent,
}) => {
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
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '60vh',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(20,20,20,1) 100%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ color: 'white', maxWidth: '600px' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5rem' },
                mb: 2,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              {category}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              {description}
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'netflix.main',
                '&:hover': {
                  backgroundColor: 'netflix.light',
                },
              }}
            >
              Explore {category}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Featured in {category}
        </Typography>
        <Grid container spacing={4}>
          {content.map((item) => (
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
                    <IconButton size="small" onClick={() => handleSave(item.id)}>
                      {item.isSaved ? (
                        <Bookmark sx={{ color: 'primary.main', fontSize: 20 }} />
                      ) : (
                        <BookmarkBorder sx={{ fontSize: 20 }} />
                      )}
                    </IconButton>
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
    </Box>
  );
};

export default CategoryPage; 