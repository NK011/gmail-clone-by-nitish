import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMailIsOpen: false,
  },
  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    openSendMail: state => {
      state.sendMailIsOpen = true;
    },
    closeMail: state => {
      state.sendMailIsOpen = false;
    },
  },
});

export const { selectMail,  openSendMail, closeMail } = mailSlice.actions;

export const selectOpenMail = state => state.mail.selectedMail;
export const selectsendMailIsOpen = state => state.mail.sendMailIsOpen;

export default mailSlice.reducer;
