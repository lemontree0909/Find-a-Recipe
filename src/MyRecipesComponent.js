function MyRecipesComponent ({label, cuisineType, calories, mealType, image, ingredients}) {
    return(<div>
        <div className="container">
            <h2>{label}</h2>
        </div>

        <div className="container line">
            <h4> <img src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/null/external-world-ecology-and-energy-xnimrodx-lineal-color-xnimrodx.png" width="30px" alt="icon"/> {cuisineType}</h4>
            <h4> <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/null/external-kcal-health-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" width="30px" alt="icon"/> {calories.toFixed()}</h4>
            <h4> <img src="https://img.icons8.com/clouds/100/null/tableware.png" width="40px" alt="icon"/> {mealType}</h4>
        </div>

        <div className="container">
            <img className="tasty" src={image} alt="meal"/>
        </div>

        <ul className="list">
            {ingredients.map((ingredient, index)=>(
                <li key={index}> <img src="https://img.icons8.com/external-microdots-premium-microdot-graphic/64/null/external-mark-communication-multimedia-vol2-microdots-premium-microdot-graphic-2.png" width="15px" alt="icon"/> {ingredient} </li>
            ))}
        </ul>
    
    </div>)
}

export default MyRecipesComponent;