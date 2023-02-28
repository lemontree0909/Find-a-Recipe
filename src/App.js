import { useEffect, useState } from 'react';
import video from './coverr-mixing-shrimp-salad-535-1080p.mp4';
import MyRecipesComponent from './MyRecipesComponent';
import './App.css';

function App() {

const MY_ID ="a40f7b44";
const MY_KEY ="35106c6bfaa1bff3719e2f3033624898";

const [mySearch, setMySearch] = useState('');
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState('chicken');

useEffect (() => {
  const getRecipe = async() =>{
    const responce = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await responce.json();
    setMyRecipes(data.hits);
  }
  getRecipe()
}, [wordSubmitted])


const myRecipeSearch = (e) =>{
  setMySearch(e.target.value);
}

const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
  setMySearch("");
}

  return (
    <div>

      <div>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4"/>
        </video>
      </div>

        
        <div className='header'>
          <div className='container'>
            <h1>Find a Recipe & Cook</h1>
          </div>

          <div className='container'>
            <form onSubmit={finalSearch}>
              <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}/>
              <button>
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/null/external-search-food-delivery-vitaliy-gorbachev-flat-vitaly-gorbachev.png" className='icon' alt="ico"/>
              </button>
            </form>
          </div>

        </div>

        <div className="around">
        <div>
          {myRecipes.map((element, index)=>(
            <MyRecipesComponent key={index}
            label={element.recipe.label}
            cuisineType={element.recipe.cuisineType}
            calories={element.recipe.calories}
            mealType={element.recipe.mealType}
            image={element.recipe.image}
            ingredients={element.recipe.ingredientLines}/>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
