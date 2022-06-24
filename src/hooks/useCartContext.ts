import { useContext } from "react";
import { CartContext } from "../Contexts/cartContext";

export function useCart(){
  const value = useContext(CartContext)
  return value
}