import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Toggler from "./toggler";
import { TABS } from "../../utils/pages-tabs";
import { TABS2 } from "../../utils/pages-tabs";
import logo from "../../assets/logo1.png";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Header({ darkMode, handleClick }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#800000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "primary.main" }}>
        <AppBar position="static">
          <Container maxWidth="x1">
            <Toolbar disableGutters>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mt: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 900,
                  color: "white",
                }}
              >
                <IconButton>
                  <img src={logo} alt="logo" width={25} height={20}></img>
                </IconButton>
                UIET DOCS
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                      mr: "2",
                      color: "black",
                    },
                  }}
                >
                  {TABS.map(({ label, value }) => (
                    <MenuItem>
                      <Link to={value}>{label}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                <IconButton>
                  <img src={logo} alt="logo" width={25} height={20}></img>
                </IconButton>
                UIET DOCS
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  mr: "2",
                  display: { xs: "none", md: "flex" },
                }}
              >
                {TABS?.map(({ label, value }) => (
                  <Link
                    onClick={handleCloseNavMenu}
                    class="p-2 mr-3 text-white hover:text-white font-medium"
                    to={value}
                  >
                    {label}
                  </Link>
                ))}
              </Box>

              <Stack direction="row" spacing={1.2}>
                <Toggler darkMode={darkMode} handleClick={handleClick} />
                {TABS2?.map(({ label, value }) => (
                  <Link
                    onClick={handleCloseNavMenu}
                    class="mr-5 text-white hover:text-white font-medium"
                    to={value}
                  >
                    {label}
                  </Link>
                ))}
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
