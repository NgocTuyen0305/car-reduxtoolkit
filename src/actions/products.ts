import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProduct } from "../interfaces/products";

export const fetchProduct = createAsyncThunk('fetch/product', async()=>{
  const {data} = await axios.get(`http://localhost:3000/products`);
  console.log(data);
  
  return data
})
export const addProduct = createAsyncThunk('add/product', async(product:IProduct)=>{
  const {data} = await axios.post(`http://localhost:3000/products`,product);
  return data
})
export const deleteProduct = createAsyncThunk('delete/product', async(product:IProduct)=>{
  const {data} = await axios.delete(`http://localhost:3000/products/${product.id}`);
  return data
})
export const updateProduct = createAsyncThunk('update/product', async(newProduct:IProduct)=>{
  const {data} = await axios.put(`http://localhost:3000/products/${newProduct.id}`,newProduct);
  return data
})