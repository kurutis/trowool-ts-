import { SET_SELECTED_CATEGORY } from '../actions/actionTypes';

interface Product {
    id: number;
    name: string;
    category: string;
    composition: string[];
    composition_percent: string;
    brand: string;
    season: string[];
    series: string;
    price: number;
    packQuantity: number;
    threadLength: number;
    weight: number;
    description: string;
    colors: string[];
    images: string[];
}

interface ProductState {
    products: Product[];
    categories: string[];
    selectedCategory: string;
}

interface SetSelectedCategoryAction {
    type: typeof SET_SELECTED_CATEGORY;
    payload: string;
}

type ProductAction = SetSelectedCategoryAction;

const initialState: ProductState = {
    products: [
        {
            id: 1,
            name: 'Юбилейная',
            category: 'Троицкая пряжа для ручного вязания',
            composition: ['мериносовая шерсть', 'акрил'],
            composition_percent: '20% мериносовая шерсть, 80% акрил',
            brand: 'Пряжа из Троицка',
            season: ['весна', 'осень', 'зима'],
            series: 'классическая',
            price: 250.00,
            packQuantity: 5,
            threadLength: 200,
            weight: 200,
            description: 'Перед вами новинка Классической серии -  объёмная пряжа ЮБИЛЕЙНАЯ,  из которой можно очень быстро и легко связать любое изделие! ...', // truncated for brevity
            colors: ['#E05655', '#E35B5B','#D5893E', '#1FA39D'],
            images: ['./src/assets/Products/yubileynaya.jpg', './src/assets/Products/yubileynaya_E05655.jpg', './src/assets/Products/yubileynaya_E35B5B.jpg', './src/assets/Products/yubileynaya_D5893E.jpg', './src/assets/Products/yubileynaya_1FA39D.jpg'],
        },
        {
            id: 2,
            name: 'Шотландский твид',
            category: 'Троицкая пряжа для ручного вязания',
            composition: ['Шерсть'],
            composition_percent: '100% шерсть',
            brand: 'Пряжа из Троицка',
            season: ['зима', 'осень', 'весна'],
            series: 'чистая шерсть',
            price: 240.00,
            packQuantity: 10,
            threadLength: 360,
            weight: 100,
            description: 'Твидовая пряжа - это разновидность пряжи, изготовленная из толстой и плотной некрученой овечьей шерсти.  ...', // truncated for brevity
            colors: ['#9AA1AD', '#3D5E80', '#6B4A8F', '#69562E', '#61375F', '#645954', '#63322F', '#B0444F', '#797585', '#69564E'],
            images: ['./src/assets/Products/scotlandTvid.jpg', './src/assets/Products/scotlandTvid_9AA1AD.png', './src/assets/Products/scotlandTvid_3D5E80.jpg', './src/assets/Products/scotlandTvid_6B4A8F.jpg', './src/assets/Products/scotlandTvid_69562E.jpg', './src/assets/Products/scotlandTvid_61375F.jpg', './src/assets/Products/scotlandTvid_645954.jpg', './src/assets/Products/scotlandTvid_63322F.jpg', './src/assets/Products/scotlandTvid_B0444F.jpg', './src/assets/Products/scotlandTvid_797585.jpg', './src/assets/Products/scotlandTvid_69564E.jpg'],
        },
    ],
    categories: ['Троицкая пряжа для ручного вязания', 'Шерсть для валяния', 'Пряжа российских производителей', 'Пехорская пряжа', 'Спицы, крючки и иглы для валяния', 'Иностранная пряжа', 'Одеяла'],
    selectedCategory: '',
};

const productReducer = (state: ProductState = initialState, action: ProductAction): ProductState => {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:
            return { 
                ...state, 
                selectedCategory: action.payload 
            };
        default:
            return state;
    }
};

export default productReducer;