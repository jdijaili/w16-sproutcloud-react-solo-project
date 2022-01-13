import { csrfFetch } from "./csrf";

// ACTIONS
const LOAD_SONGS = 'songs/LOAD_SONGS';

const ADD_SONG = 'songs/ADD_SONG';

const EDIT_SONG = 'songs/EDIT_SONG';

const DELETE_SONG = 'songs/DELETE_SONG';

const GET_USER_SONGS = 'songs/GET_USER_SONGS';

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

const updateSong = (editedSong) => {
    return {
        type: EDIT_SONG,
        editedSong
    }
};

const discardSong = (id) => {
    return {
        type: DELETE_SONG,
        id
    }
}

const loadUserSongs = (userSongs) => {
    return {
        type: GET_USER_SONGS,
        userSongs
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
};

export const editSong = (editedSong, id) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editedSong)
    });

    const data = await res.json();
    dispatch(updateSong(data));
    return data;
};

export const deleteSong = (songId) => async (dispatch) => {
    const res = await csrfFetch(`/api/songs/${songId}`, {
        method: 'DELETE'
    });

    const data = await res.json();
    dispatch(discardSong(data));
    return data;
};

export const getUserSongs = (userId) => async (dispatch) => {
    console.log(userId)
    const res = await fetch(`/api/users/${userId}/songs`);
    const data = await res.json();
    dispatch(loadUserSongs(data));
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
            let song = state.list.find(song => song.id === action.editedSong.id);
            song = action.editedSong;
            return { ...state, list: [...state.list] };
        case DELETE_SONG:
            let newState = Object.assign({}, state);
            newState.song = null;
            return newState;
        case GET_USER_SONGS:
            return { ...state, mySongs: [...action.userSongs.Songs] }
        default:
            return state;
    }

};

export default songsReducer;
