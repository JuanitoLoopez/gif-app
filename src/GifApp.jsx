import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifApp = () => {

  const [categories, setCategories] = useState([
    'One Punch',
    'Dragon Ball'
  ])

  const onAddCategory = (newCategory) => {
    if( categories.includes(newCategory) ) return;

    setCategories( [newCategory, ...categories] )
  }

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory onNewCategory={onAddCategory}/>

      <button onClick={ onAddCategory }>Agregar</button>
      
      { 
        categories.map(category =>
          (
            <GifGrid key={category} category={category} />
          )
        )
      }

    </>
  )
}

