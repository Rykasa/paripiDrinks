interface Cocktail{
  idDrink: string;
  strDrink: string;
  price?: string;
  strDrinkThumb: string;
  amount?: number;
}

export enum Actions{
  DISPLAY_ITEMS = 'DISPLAY_ITEMS',
  LOADING = 'LOADING',
}

interface ActionType{
  type: Actions;
  payload?: any;
}

export interface StateType{
  isLoading: boolean;
  amount: number;
  total: number;
  cocktails: Cocktail[]
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
    default:
      throw new Error('no match')
  }
}