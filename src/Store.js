import { configureStore } from '@reduxjs/toolkit'
import ProductSlices from './Slices/ProductSlices'


export default configureStore({
  reducer: {
    counter: ProductSlices,
  },
})