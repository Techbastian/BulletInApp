import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { UserReducer } from './Slices/UsersSlices'
import { RutinaReducer } from './Slices/RutinasSlices'

export const store = configureStore({
    reducer: combineReducers({
        user: UserReducer.reducer,
        productos: RutinaReducer.reducer
    }),
    devTools: process.env.NODE_ENV === "development"
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch