import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Avatar,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Share,
  BookmarkBorder,
  Bookmark,
} from '@mui/icons-material';
import { RootState } from '../store';
import { images } from '../assets/images';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

// Mock data for user's content
const mockUserContent = [
  {
    id: 1,
    title: 'Ancient Temple Architecture',
    description: 'A detailed study of temple architecture in South India',
    image: images.content.item1,
    category: 'Architecture',
    date: '2024-03-15',
    status: 'Published',
    likes: 234,
    comments: 45,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    title: 'Traditional Folk Music',
    description: 'Collection of rare folk music recordings',
    image: images.content.item2,
    category: 'Music',
    date: '2024-03-10',
    status: 'Draft',
    likes: 189,
    comments: 32,
    isLiked: true,
    isSaved: true,
  },
];

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [tabValue, setTabValue] = React.useState(0);
  const [content, setContent] = React.useState(mockUserContent);

  if (!user) {
    return (
      <Container>
        <Typography>Please log in to view your profile.</Typography>
      </Container>
    );
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

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
      {/* Profile Header */}
      <Paper sx={{ p: 4, mb: 4, borderRadius: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
            <Avatar
              src={images.profile.default}
              sx={{
                width: 150,
                height: 150,
                margin: '0 auto',
                mb: 2,
                border: '3px solid #2E7D32',
              }}
            />
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{ mt: 2 }}
            >
              Edit Profile
            </Button>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography variant="h4" sx={{ mr: 2 }}>
                {user.name}
              </Typography>
              <Button variant="contained" size="small">
                Follow
              </Button>
            </Box>
            <Stack direction="row" spacing={4} sx={{ mb: 2 }}>
              <Typography variant="body2">
                <strong>{content.length}</strong> posts
              </Typography>
              <Typography variant="body2">
                <strong>1.2k</strong> followers
              </Typography>
              <Typography variant="body2">
                <strong>450</strong> following
              </Typography>
            </Stack>
            <Typography variant="body1" color="text.secondary" paragraph>
              {user.email}
            </Typography>
            {user.location && (
              <Typography variant="body2" color="text.secondary">
                📍 {user.location}
              </Typography>
            )}
            {user.occupation && (
              <Typography variant="body2" color="text.secondary">
                💼 {user.occupation}
              </Typography>
            )}
            <Box sx={{ mt: 2 }}>
              <Typography variant="subtitle1" gutterBottom>
                Content Preferences
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {user.preferences.contentTypes.map((type) => (
                  <Chip key={type} label={type} size="small" />
                ))}
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Persona: {user.preferences.persona}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs Section */}
      <Paper sx={{ width: '100%', borderRadius: 2 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="profile tabs"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Posts" />
          <Tab label="Saved" />
          <Tab label="Contributions" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Box sx={{ mb: 3 }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create New Post
            </Button>
          </Box>
          <Stack spacing={3}>
            {content.map((item) => (
              <Card key={item.id} sx={{ borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={item.image}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h3">
                      {item.title}
                    </Typography>
                    <Box>
                      <IconButton size="small">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {item.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Stack direction="row" spacing={1}>
                      <IconButton size="small" onClick={() => handleLike(item.id)}>
                        {item.isLiked ? (
                          <Favorite sx={{ color: 'error.main' }} />
                        ) : (
                          <FavoriteBorder />
                        )}
                      </IconButton>
                      <IconButton size="small">
                        <ChatBubbleOutline />
                      </IconButton>
                      <IconButton size="small">
                        <Share />
                      </IconButton>
                    </Stack>
                    <IconButton size="small" onClick={() => handleSave(item.id)}>
                      {item.isSaved ? (
                        <Bookmark sx={{ color: 'primary.main' }} />
                      ) : (
                        <BookmarkBorder />
                      )}
                    </IconButton>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="subtitle2">
                      {item.likes} likes • {item.comments} comments
                    </Typography>
                    <Chip
                      label={item.status}
                      size="small"
                      color={item.status === 'Published' ? 'success' : 'default'}
                    />
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography>Saved items will appear here.</Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography>Your contributions will appear here.</Typography>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Profile; 