import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, Box, CircularProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

// Components
import Header from './components/Header/Header';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer/Footer';
import MainSection from './components/MainSection/MainSection';

// Context Providers
import { PageTitleProvider } from './context/PageTitleContext';
import { ThemeContextProvider } from './theme/ThemeContext';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Education = lazy(() => import('./pages/Education/Education'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const Services = lazy(() => import('./pages/Services/Services'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Contact = lazy(() => import('./pages/Contact/Contact'));

function App() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <ThemeContextProvider>
      <PageTitleProvider>
        <Router>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Box sx={{ display: 'flex', flex: 1 }}>
              <SideNav open={open} handleDrawerToggle={handleDrawerToggle} />
              <MainSection>
                <Suspense fallback={
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <CircularProgress color="primary" />
                  </Box>
                }>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </MainSection>
            </Box>
            <Footer />
          </Box>
        </Router>
      </PageTitleProvider>
    </ThemeContextProvider>
  );
}

export default App;