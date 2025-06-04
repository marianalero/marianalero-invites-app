// components/NavigationLoader.tsx

import { CircularProgress, Box, Fade } from '@mui/material';
import { useNavigationLoader } from '../../context/navigationLoaderContext';

const NavigationLoader = () => {
  const { loading } = useNavigationLoader();

  return (
    <Fade in={loading}>
      <Box
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="rgba(255, 255, 255, 0.5)"
        zIndex={9999}
      >
        <CircularProgress size={60} />
      </Box>
    </Fade>
  );
};

export default NavigationLoader;