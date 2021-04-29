import './App.css';
import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
//require('dotenv').config();

//console.log(process.env);

const App = () => {
  
  const APP_ID = "159fc47c";
  const APP_KEY = "4e272c328a090a45e4945962452db7b0";

  // const exampleReq = 
  //  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
  
  // const [counter, setCounter] = useState(0);
  
  //useEffect : everytime our page re renders itself useEffect is a function that's gonna run
  // it takes an arrow function as a parameter
  // useEffect(() => {
  //   console.log('effect has been run');
  // },[]);

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('paneer');

  // useEffect( () => {
  //   getRecipes();
  // }, [])

  // useEffect( () => {
  //   getRecipes();
  // }, [search])

  useEffect(() => {
    getRecipes(); //react-hooks/exhaustive-deps
  }, [query]) //react-hooks/exhaustive-deps

  const getRecipes = async () => {
    //we don't know we will get response so we will add await everytime 
    //everytime we have any promise we will add await or you can use .then()
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    const data = await response.json();
    // console.log(data);
    // console.log(data.hits);

    setRecipes(data.hits);

    // fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    // .then(response => {
    //   response.json
    // }) 
  }
  
  // everytime you click onChange this event will run 
  const updateSearch = e => {
    setSearch(e.target.value)
    // console.log(e.target.value)
    // console.log(search)
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    //it will make it to empty string again
    setSearch('');
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit" title="testbtn">
          Search
        </button>
        {/* <h1 onClick={() => setCounter(counter+1)}>{counter}</h1> */}

      </form>

      <div className="recipes" title="testdiv">
        {recipes.map(recipe => (
          <Recipe 
            key = {recipe.recipe.shareAs}
            title = {recipe.recipe.label} 
            calories = {recipe.recipe.calories} 
            image = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
            
    </div>
  )
}

export default App;
