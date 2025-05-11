import React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  SelectChangeEvent,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { setVerificationStep } from '../store/slices/authSlice';

const contentTypes = [
  'Articles',
  'Songs',
  'Photographs',
  'Audio Stories',
  'Text Stories',
  'Research Papers',
  'Short Videos',
  'Documented Videos',
  'Music',
  'Art',
  'Sculptures',
  'Monuments',
  'Buildings',
  'Folklores',
];

const personas = [
  'Heritage Lover',
  'Explorer',
  'Researcher',
  'Practitioner',
  'Conservator',
  'Artist',
];

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  location: yup.string(),
  occupation: yup.string(),
});

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedContentTypes, setSelectedContentTypes] = React.useState<string[]>([]);
  const [selectedPersona, setSelectedPersona] = React.useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      location: '',
      occupation: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        // TODO: Replace with actual API call
        console.log('Registration values:', values);
        console.log('Content Types:', selectedContentTypes);
        console.log('Persona:', selectedPersona);
        
        // Simulate successful registration
        dispatch(setVerificationStep('verification'));
        toast.success('Registration successful! Please verify your email.');
        navigate('/verify');
      } catch (error) {
        toast.error('Registration failed. Please try again.');
      }
    },
  });

  const handleContentTypeChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[];
    setSelectedContentTypes(value);
  };

  const handlePersonaChange = (event: SelectChangeEvent) => {
    setSelectedPersona(event.target.value);
  };

  const steps = ['Account Details', 'Preferences', 'Verification'];

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Full Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="location"
                  name="location"
                  label="Location (Optional)"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="occupation"
                  name="occupation"
                  label="Occupation (Optional)"
                  value={formik.values.occupation}
                  onChange={formik.handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ mt: 3 }}>
            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Content Types</InputLabel>
              <Select
                multiple
                value={selectedContentTypes}
                onChange={handleContentTypeChange}
                input={<OutlinedInput label="Content Types" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {contentTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Persona</InputLabel>
              <Select
                value={selectedPersona}
                onChange={handlePersonaChange}
                label="Persona"
              >
                {personas.map((persona) => (
                  <MenuItem key={persona} value={persona}>
                    {persona}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              fullWidth
              variant="contained"
              onClick={() => setActiveStep(2)}
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Verification Code
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              We've sent a verification code to your email. Please enter it below.
            </Typography>
            <TextField
              fullWidth
              label="Verification Code"
              sx={{ mb: 3 }}
            />
            <Button
              fullWidth
              variant="contained"
              onClick={() => formik.handleSubmit()}
              sx={{ mt: 3, mb: 2 }}
            >
              Verify & Complete Registration
            </Button>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography component="h1" variant="h5">
            Create Your Account
          </Typography>

          <Stepper activeStep={activeStep} sx={{ width: '100%', mt: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {getStepContent(activeStep)}

          <Box sx={{ mt: 3, textAlign: 'center' }}>
            <Link component={RouterLink} to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register; 