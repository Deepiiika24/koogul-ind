import { createContext } from 'react'
import type { TypeContextModal } from './types'

export const ContextModalSearch = createContext<TypeContextModal>({
  isOpenModal: false,
  setIsOpenModal: () => {},
})
