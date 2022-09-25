import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Counter from './helpers/Counter'
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  const {increment, counterVal} = Counter()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <Typography color="primary.dark" variant="h1" onClick={increment}>
            Counting Value {counterVal}
          </Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
