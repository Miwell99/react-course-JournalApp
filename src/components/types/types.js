// Guide: [Reducer] Action
export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout',

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    notesNewEntry: '[Notes]  New Note',
    notesActive: '[Notes]  Set active note',
    notesLoad: '[Notes]  Load notes',
    notesUpdated: '[Notes]  Update note',
    notesFileUrl: '[Notes]  Update image url',
    notesDeleted: '[Notes]  Delete note',
    notesLogoutCleaning: '[Notes]  Logout Cleaning',
}