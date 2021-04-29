import React from 'react'
import style from './recipe.module.css'

// const Recipe = () => {
//     return (
//         <div>
//             <h1>Title</h1>
//             <p>Calories</p>
//             <img src="" alt=""/>
//         </div>
//     )
// }

const Recipe = ({title,calories,image,ingredients}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.image} src={image} alt=""/>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>       
                ))}
            </ul>
            <p>Total Calories: {calories}</p>            
        </div>
    )
}

export default Recipe
