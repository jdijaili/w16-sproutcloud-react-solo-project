import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from "./components/HomePage";
import './App.css';
import Songs from "./components/SongsPage/SongsPage";
import NewSongForm from "./components/SongsPage/NewSongForm";
import SongDetails from "./components/SongsPage/SongDetails";
import { getAllSongs } from "./store/songs";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const songs = useSelector(state => state.songs.list);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getAllSongs());
  }, [dispatch]);

  return (
    <div className='main'>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home isLoaded={isLoaded} />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/songs">
            <Songs />
          </Route>
          <Route path="/songs/:id">
            <SongDetails songs={songs} />
          </Route>
          <Route path="/upload">
            <NewSongForm />
          </Route>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
