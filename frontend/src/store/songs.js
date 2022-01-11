import { csrfFetch } from "./csrf";

// ACTIONS
const LOAD_SONGS = 'songs/LOAD_SONGS';

const ADD_SONG = 'songs/ADD_SONG';

const EDIT_SONG = 'songs/EDIT_SONG';

// ACTION CREATORS
const loadSongs = (songs) => {
    return {
        type: LOAD_SONGS,
        songs
    }
};

const addSong = (newSong) => {
    return {
        type: ADD_SONG,
        newSong
    }
}

const editSong = (song) => {
    return {
        type: EDIT_SONG,
        song
    }
};

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
};

export const editSong = (editedSong) => {
    const res = await csrfFetch(`/api/songs/${editedSong.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedSong)
    });

    const data = await res.json();
    dispatch(editSong(data));
    return data;
};

// INITIAL STATE
const initialState = {
    list: []
};

// REDUCER
const songsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SONGS:
            return { ...state, list: [...action.songs] };
        case ADD_SONG:
            return { ...state, list: [...state.list, action.newSong] };
        case EDIT_SONG:
            return { ...state, list: [...state.list, action.editedSong]}
        default:
            return state;
    }

};

export default songsReducer;
