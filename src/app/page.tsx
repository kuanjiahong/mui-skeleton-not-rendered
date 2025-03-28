"use client";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

function HomePageLoadingSkeleton() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      {/* SideMenu */}
      <Skeleton
        sx={{
          display: { xs: "none", md: "block" },
          width: 210,
          height: "100vh",
        }}
        variant="rectangular"
      />
      {/* AppNavBar */}
      <Skeleton
        sx={{
          display: { md: "none" },
          width: "100%",
          height: 60,
        }}
        variant="rectangular"
      />
      {/* Header */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: { xs: "auto", md: "920px" },
          mx: 3,
          mt: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          <Skeleton />
        </Typography>
      </Box>
    </Box>
  );
}

export default function Home() {
  return <HomePageLoadingSkeleton />;
}
