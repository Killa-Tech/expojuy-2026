import { useReducer } from "react"
import { FloatingMenuContext, type ContextValue } from "./context"

export const FloatingMenuProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initValue)

    const setMenu = (menu: string) => {
        dispatch({ type: 'SET_MENU', payload: menu })
    }

    const closeMenu = () => {
        dispatch({ type: 'CLOSE_MENU' })
    }

    const value: ContextValue = {
        setMenu,
        closeMenu,
        ...state,
    }

    return (
        <FloatingMenuContext value={value}>
            {children}
        </FloatingMenuContext>
    )
}

type State = Omit<ContextValue, 'setMenu' | 'closeMenu'>
type Action = { type: 'SET_MENU', payload: string } | { type: 'CLOSE_MENU' } 

const initValue = { isOpen: false, menu: '' }

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_MENU':
            return { ...state, isOpen: true, menu: action.payload }
        case 'CLOSE_MENU':
            return { ...state, isOpen: false }
        default:
            return state
    }
}  