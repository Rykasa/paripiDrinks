import { ReactNode } from "react";
import { Item } from "../components/CartItem/styles";

export interface Cocktail{
  idDrink: string;
  strDrink: string;
  price?: string;
  strDrinkThumb: string;
  amount?: number;
}

export interface Cart{
  idDrink: string;
  strDrink: string;
  price?: string;
  strDrinkThumb: string;
  amount: number;
}

export enum Actions{
  LOADING = 'LOADING',
  DISPLAY_ITEMS = 'DISPLAY_ITEMS',
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  GET_TOTAL = 'GET_TOTAL',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CHANGE_AMOUNT = 'CHANGE_AMOUNT',
  CHECK_DUPLICATE = 'CHECK_DUPLICATE',
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  ADD_CARD = 'ADD_CARD',
  SELECT_CARD = 'SELECT_CARD',
  SHOW_MESSAGE = 'SHOW_MESSAGE',
  HIDE_MESSAGE = 'HIDE_MESSAGE',
  SHOW_ERROR = 'SHOW_ERROR'
}

interface ActionType{
  type: Actions;
  payload?: any;
}

export interface Card{
  logo?: ReactNode;
  cardNumber: string;
  cardholder: string;
  month: string;
  year: string;
  cvv: string;
  isSelected: boolean;
}

export interface ErrorType{
  messageError: string;
  hadError: boolean;
}

export interface StateType{
  isLoading: boolean;
  amount: number;
  total: number;
  cocktails: Cocktail[];
  cart: Cart[];
  isModalOpen: boolean;
  cards: Card[];
  isMessageOpen: boolean;
  errorAlert: ErrorType;
}

export function reducer(state: StateType, action: ActionType){
  const { type, payload } = action
  switch (type){
    case Actions.DISPLAY_ITEMS:
      return {
        ...state,
        cocktails: payload, isLoading: false,
      }
    case Actions.LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case Actions.TOGGLE_MODAL:
      return { ...state, isModalOpen: !payload }
    case Actions.ADD_ITEM_TO_CART:
      const duplicatedItem = state.cart.find((item) => item.idDrink === payload.idDrink )
      if(duplicatedItem){
        const newCartList = state.cart.map((item) => {
          if(item.idDrink === payload.idDrink){
            return {...item, amount: item.amount + 1}
          }
          return item
        })
        return {
          ...state,
          cart: newCartList
        }
      }else{
        return {
          ...state,
          cart: [...state.cart, payload]
        }
      }
    case Actions.GET_TOTAL:
      let { total, amount}  = state.cart.reduce((cartTotal, cartItem) =>{
        const { price, amount } = cartItem
        if(price && amount){
          const parsedPrice = parseFloat(price)
          const itemTotal = parsedPrice * amount

          cartTotal.total += itemTotal
          cartTotal.amount += amount
          return cartTotal
        }
        return cartTotal
      }, { total: 0, amount: 0 })
      total = parseFloat(total.toFixed(2))
      return {
        ...state,
        total,
        amount,
      }
    case Actions.REMOVE_ITEM_FROM_CART:
      const newCart = state.cart.filter((item) => item.idDrink !== payload)
      return {
        ...state,
        cart: newCart
      }
    case Actions.CHANGE_AMOUNT:
      const { id, type } = payload
      let tempCart = state.cart.map((item) => {
        if(item.idDrink === payload.id){
          if(type === 'increase'){
            return {
              ...item, amount: item.amount + 1
            }
          }

          if(type === 'decrease'){
            return {
              ...item, amount: item.amount - 1
            }
          }
        }
        return item
      }).filter((item) => item?.amount !== 0)
      return {
        ...state,
        cart: tempCart  
      }

    case Actions.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, payload]
      }
      
    case Actions.SELECT_CARD:
      const tempCards = state.cards.map((card, index) =>{
        if(index === payload){
          return {...card, isSelected: card.isSelected = true }
        }
        return {...card, isSelected: card.isSelected = false}
      })
      return {
        ...state,
        cards: tempCards
      }

    case Actions.SHOW_MESSAGE:
      if(state.cards.length < 1){
        return { ...state }
      }else{
        return {
          ...state,
          isMessageOpen: state.isMessageOpen = true
        }
      }

    case Actions.HIDE_MESSAGE:
      return {
        ...state,
        isMessageOpen: state.isMessageOpen = false
      }

    case Actions.SHOW_ERROR:
      return {
        ...state,
        errorAlert:  {
          ...state.errorAlert, 
          messageError: payload.message, 
          hadError: payload.hadError
        }
      }
    
    default:
      throw new Error('no match')
  }
}