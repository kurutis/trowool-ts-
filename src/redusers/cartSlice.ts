import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: number;
    quantity: number;
    selectedColor: string; 
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const { id, quantity, selectedColor } = action.payload; 
            const item = state.items.find(item => item.id === id && item.selectedColor === selectedColor);
            if (item) {
                item.quantity += quantity; 
            } else {
                state.items.push({ ...action.payload }); 
            }
        },
        removeFromCart: (state, action: PayloadAction<{ id: number; selectedColor: string }>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id || item.selectedColor !== action.payload.selectedColor);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

// Export actions and reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;