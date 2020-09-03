import React from 'react'
import { Anchor, Image } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

// Definiendo los props del componente, cuando se asigna un valor es para dejarlo por defecto
export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt='default_image' />
    {emoji}
  </Anchor>
)
