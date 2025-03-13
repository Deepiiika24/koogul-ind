import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
};

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type ProductState = {
  products: Product[];
  productById: Product | undefined;
  searchQuery: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  total: number;
  page: number;
  limit: number;
  error: string | undefined;
};
const params = new URLSearchParams(window.location.search)
const query = params.get("q")
const p = params.get("p")
const page = p ? parseInt(p) : 1
const initialState: ProductState = {
  products: [],
  productById: undefined,
  searchQuery: query ?? "",
  status: "idle",
  total: 0,
  page: page,
  limit: 6,
  error: undefined
}

export const fetchProduct = createAsyncThunk(
  "products/fetchProducts",
  async ({ page = 1, limit = 6 }: { page?: number; limit?: number }) => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
    )
    console.log(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`)
    return {
      products: response.data.products as Product[],
      total: response.data.total as number,
      page,
      limit: response.data.limit
    }
  }
)

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id: string) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    return response.data as Product
  }
)


export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async ({ query, page = 1, limit = 9 }: { query: string, page?: number; limit?: number }) => {
    const response = await axios.get(`https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${(page - 1) * limit}`)
    console.log(`https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${(page - 1) * limit}`)
    return {
      products: response.data.products as Product[],
      total: response.data.total as number,
      page,
      limit
    }
  }
)

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.page = 1
      state.searchQuery = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.products = action.payload.products
        state.total = action.payload.total
        state.page = action.payload.page
        state.limit = action.payload.limit
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message ?? "Something went wrong"
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.productById = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message ?? "Something went wrong"
      })
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.products = action.payload.products
        state.total = action.payload.total
        state.page = action.payload.page
        state.limit = action.payload.limit
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message ?? "Something went wrong"
      })
  }
})
export const { setSearchQuery, setPage } = productSlice.actions
export default productSlice.reducer
