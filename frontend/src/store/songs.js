import { csrfFetch } from "./csrf";

// ACTIONS
const LOAD_SONGS = 'songs/LOAD_SONGS';

const ADD_SONG = 'songs/ADD_SONG';

// ACTION CREATORS
export const loadSongs = (songs) => {
    return {
        type: LOAD_SONGS,
        songs
    }
};

export const addSong = (newSong) => {
    return {
        type: ADD_SONG,
        newSong
    }
}

// THUNK CREATORS
export const getAllSongs = () => async (dispatch) => {
    const res = await csrfFetch('/api/songs');
    const data = await res.json();
    dispatch(loadSongs(data));
};

export const addNewSong = (newSong) => async (dispatch) => {
    const res = await csrfFetch('/api/songs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSong)
    });

    const data = await res.json();
    dispatch(addSong(data));
    return data;
}

// INITIAL STATE
const initialState = {
    list: []
};

// REDUCER
const songsReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case LOAD_SONGS:
            return { ...state, list: [...action.songs] };
        case ADD_SONG:
            return { ...state, list: [...state.list, action.newSong] }
        default:
            return state;
    }

};

export default songsReducer;
