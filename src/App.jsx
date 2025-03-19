import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import Form from "./pages/Form";
import FormV2 from "./pages/FormV2";
import ResultsPage from "./pages/ResultsPage";
import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import theme from './theme';

import Navigation from './components/Navigation';
import About from './pages/About';
import Services from './pages/Services';
import Home from './pages/Home';
import Learn from './pages/Learn';


// Create a client
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/learn" element={<Learn />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/form" element={<Form />} />
              <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>



      </BrowserRouter>
    </QueryClientProvider>
  );
}
