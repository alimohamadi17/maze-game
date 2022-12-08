import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


const initialState = {
    data: '',
    loading: false,
    error: null,
    id: '',
    currentRoom: '',
    direction: '',
    destination: '',
    paths: ''

}


export const fetchStartPlay = createAsyncThunk('start/fetchdata',
    async () => {
        try {
            const response = await fetch('https://mazegame.plingot.com/Game/start', {
                method: 'POST',

                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                    Authorization: "token",
                }
            }

            )
            const data = await response.json()

            return data;
        } catch (error) {
            throw error;
        }
    })


////

export const fetchPlayer = createAsyncThunk('player/fetchPlayer',
    async () => {
        try {
            const response = await fetch('https://mazegame.plingot.com/Player', {
                method: 'GET',
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                    Authorization: localStorage.getItem('token')
                },

            })
            const data = await response.json()
            return data;
        } catch (error) {
            throw error
        }
    })


////////

export const fetchCurrentRoom = createAsyncThunk('player/fetchCurrentRoom',
    async () => {
        try {
            const response = await fetch('https://mazegame.plingot.com/Room/current', {
                method: 'GET',
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                    Authorization: localStorage.getItem('token'),
                },
            })
            const data = await response.json()

            return data;

        } catch (error) {
            throw error
        }

    })

/////



export const fetchMovePlayer = createAsyncThunk('player/fetchMovePlayer',
    async (direction) => {
        try {

            const response = await fetch(`https://mazegame.plingot.com/Player/move?direction=${direction}`, {
                method: 'PUT',
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                    Authorization: localStorage.getItem('token'),

                },

            })
            const data = await response.text()

            return data;

        } catch (error) {
            throw error;

        }

    })



const playSlice = createSlice({
    name: 'start',
    initialState,
    extraReducers: {
        [fetchStartPlay.pending]: (state) => {
            state.loading = true
        },
        [fetchStartPlay.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload
        },
        [fetchStartPlay.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        [fetchCurrentRoom.pending]: (state) => {
            state.loading = true
        },
        [fetchCurrentRoom.fulfilled]: (state, action) => {
            state.loading = false;
            state.paths = action.payload
        },
        [fetchCurrentRoom.rejected]: (state, action) => {
            state.loading = false;
            state.error = "somthing went wrong"
        },
        [fetchPlayer.pending]: (state) => {
            state.loading = true
        },
        [fetchPlayer.fulfilled]: (state, action) => {
            state.loading = false;
            state.currentRoom = action.payload
        },
        [fetchPlayer.rejected]: (state, action) => {
            state.loading = false;
            state.error = "somthing went wrong"
        },
        [fetchMovePlayer.pending]: (state) => {
            state.loading = true
        },
        [fetchMovePlayer.fulfilled]: (state, action) => {
            state.loading = false;
            state.direction = action.payload
            state.paths = action.payload
        },
        [fetchMovePlayer.rejected]: (state, action) => {
            state.loading = false;
            state.error = "somthing went wrong"
        }
    }
})


export default playSlice.reducer;