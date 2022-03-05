import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import AdminLayout from 'components/layout/admin';
import * as React from 'react';

export default function AboutPage() {
  return (
    <Box>
      <Typography component="h1" variant="h3" color="primary.main">
        about page{' '}
      </Typography>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;
