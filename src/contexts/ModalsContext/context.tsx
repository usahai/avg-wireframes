import { createContext } from 'react'
import { ModalsContextProps } from './definitions'

export const ModalsContext = createContext<ModalsContextProps | undefined>(
  undefined
)
