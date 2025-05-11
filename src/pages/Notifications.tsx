import { useState, useEffect } from 'react';
import {
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Box,
  Divider,
  IconButton,
  Badge,
  Tabs,
  Tab,
} from '@mui/material';
import {
  Event as EventIcon,
  Upload as UploadIcon,
  TrendingUp as TrendingIcon,
  Quiz as QuizIcon,
} from '@mui/icons-material';

interface Notification {
  id: string;
  type: 'event' | 'upload' | 'trending' | 'quiz';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchNotifications = async () => {
      // Simulated notifications data
      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'event',
          title: 'Upcoming Workshop',
          message: 'Join us for a workshop on traditional art forms this weekend.',
          timestamp: '2 hours ago',
          read: false,
        },
        {
          id: '2',
          type: 'upload',
          title: 'New Content',
          message: 'John Doe uploaded a new article about temple architecture.',
          timestamp: '5 hours ago',
          read: true,
        },
        {
          id: '3',
          type: 'trending',
          title: 'Trending Content',
          message: 'Your article on folk music is trending!',
          timestamp: '1 day ago',
          read: false,
        },
        {
          id: '4',
          type: 'quiz',
          title: 'New Quiz Available',
          message: 'Test your knowledge about Indian heritage with our new quiz.',
          timestamp: '2 days ago',
          read: true,
        },
      ];

      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'event':
        return <EventIcon />;
      case 'upload':
        return <UploadIcon />;
      case 'trending':
        return <TrendingIcon />;
      case 'quiz':
        return <QuizIcon />;
      default:
        return null;
    }
  };

  const filteredNotifications = notifications.filter((notification) => {
    if (selectedTab === 0) return true; // All notifications
    if (selectedTab === 1) return !notification.read; // Unread notifications
    return notification.type === ['event', 'upload', 'trending', 'quiz'][selectedTab - 2];
  });

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Notifications
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab label="All" />
          <Tab
            label={
              <Badge
                badgeContent={notifications.filter((n) => !n.read).length}
                color="primary"
              >
                Unread
              </Badge>
            }
          />
          <Tab label="Events" />
          <Tab label="Uploads" />
          <Tab label="Trending" />
          <Tab label="Quizzes" />
        </Tabs>
      </Box>

      <List>
        {filteredNotifications.map((notification, index) => (
          <Box key={notification.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                bgcolor: notification.read ? 'inherit' : 'action.hover',
              }}
            >
              <ListItemAvatar>
                <Avatar>{getNotificationIcon(notification.type)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="text.primary"
                  >
                    {notification.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {notification.message}
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      color="text.secondary"
                      sx={{ display: 'block' }}
                    >
                      {notification.timestamp}
                    </Typography>
                  </>
                }
              />
            </ListItem>
            {index < filteredNotifications.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Container>
  );
};

export default Notifications; 