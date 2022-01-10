
// ACTIONS
const LOAD_SONGS = 'songs/LOAD_SONGS';

// ACTION CREATORS
export const loadSongs = (songs) => {
    return {
        type: LOAD_SONGS,
        songs
    }
};

// THUNK CREATORS
export const getAllSongs = () => async (dispatch) => {
    const res = await fetch('/api/songs');
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    dispatch(loadSongs(data));
};

// INITIAL STATE
const initialState = {
    songs: []
};

// REDUCER
const songsReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case LOAD_SONGS:
            return { ...state, songs: [...action.songs] }
        default:
            return state;
    }

};

export default songsReducer;
