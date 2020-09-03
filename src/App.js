import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './GlobalStyles'

// Esto se le llama export nombrado
export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
  </div>
)
