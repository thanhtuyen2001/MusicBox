import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import Signup from "./pages/Signup";
import App from "./App";
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts, Login, MV, Songs, User } from './pages';
import Podcast from './pages/Podcast';

const Layout = () => {
  return (
    <div className="pageTheme">
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path="/discover" element={<Discover />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/top-artists" element={<TopArtists />} />
          <Route path="/top-charts" element={<TopCharts />} />
          <Route path="/around-you" element={<AroundYou />} />
          <Route path="/artists/:id" element={<ArtistDetails />} />
          <Route path="/songs/:songid" element={<SongDetails />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/mv" element={<MV />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Layout;
