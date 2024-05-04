import { Box, Link, Typography, useTheme } from "@mui/material";
// import { purple } from '@mui/material/colors';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        py: 1.5,
        mt: 8,
      }}
    >
      <Typography
        color={theme.palette.text.primary}
        sx={{ fontSize: 15, textAlign: "center" }}
      >
        Copyright ©{new Date().getFullYear()} All rights reserved | This
        template is made with by
        <span>
          <Link
            href="https://www.facebook.com/AymanIbrahim.official"
            target="_blank"
            sx={{ ml: 1 }}
            underline="none"
          >
            {"Ayman Ibrahim"}
          </Link>
        </span>
      </Typography>
    </Box>
  );
};

export default Footer;
