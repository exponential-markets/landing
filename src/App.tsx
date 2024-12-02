import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import About from "@/pages/About";
import Blogs from "@/pages/blogs/Blogs";
import Blog from "@/pages/blogs/id/Blog";
import "@/lib/i18n";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

posthog.init("phc_Pf23onE68qvYSLrFboMEl6TdGqX3HIy2pLqGSlVfuwt", {
  api_host: "https://us.i.posthog.com",
  loaded: (posthog) => {
    if (import.meta.env.DEV) posthog.debug();
  },
});

function App() {
  return (
    <PostHogProvider client={posthog}>
      <Router>
        <GoogleOAuthProvider clientId="466166715128-g3qdmonrsithnmvr4v932iptikfao2kh.apps.googleusercontent.com">
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/developer" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<Blog />} />
            </Route>
          </Routes>
        </GoogleOAuthProvider>
      </Router>
    </PostHogProvider>
  );
}

export default App;
