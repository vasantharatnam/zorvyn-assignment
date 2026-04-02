import { createSlice } from "@reduxjs/toolkit";
import { initialTransactions } from "../../data/initialTransactions";

const savedTheme = localStorage.getItem('theme') || 'light'

const initialState = {
    role: "viewer",
    transactions: initialTransactions,
    searchTerm: '',
    selectedType: 'all',
    selectedCategory: 'all',
    sortBy: 'latest',
    theme: savedTheme,
}

const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        setRole: (state , action) => {
            state.role = action.payload;
        },

        setSearchTerm: (state , action) => {
            state.searchTerm = action.payload;
        },

        setSelectedType: (state , action) => {
            state.selectedType = action.payload;
        },

        setSelectedCategory: (state , action) => {
            state.selectedCategory = action.payload;
        },

        setSortBy: (state , action) => {
            state.sortBy = action.payload;
        },

        addTransaction: (state , action) => {
            state.transactions.push(action.payload);
        },

        editTransaction: (state , action) => {
             const editedTransaction = action.payload;
             const index = state.transactions.findIndex((item) => item.id === editedTransaction.id);
                if(index !== -1){
                    state.transactions[index] = editedTransaction;
                }
        },

        deleteTransaction: (state , action) => {
            state.transactions = state.transactions.filter((item) => item.id !== action.payload);
        },

       toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
             localStorage.setItem('theme', state.theme)
        },

         setTheme: (state, action) => {
               state.theme = action.payload
               localStorage.setItem('theme', state.theme)
        },
        
        resetFilters: (state) => {
            state.searchTerm = '';
            state.selectedType = 'all';
            state.selectedCategory = 'all';
            state.sortBy = 'latest';
        },
    },
})

export const {
    setRole,
    setSearchTerm,
    setSelectedType,
    setSelectedCategory,
    setSortBy,
    addTransaction,
    editTransaction,
    deleteTransaction,
    resetFilters,
    toggleTheme,
    setTheme,
} = financeSlice.actions;

export default financeSlice.reducer;