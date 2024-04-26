import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  /*Add: use the spread operator ([...]),
    Remove: use .filter,
    Update: use .map,
  */
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy]=useState("All");

  const foodsToDisplay= foods.filter((food)=>{
    if(filterBy==="All"){
      return true
    }
    else{
      return food.cuisine === filterBy;
    }
  })
   function handleFilterChange(event){
    setFilterBy(event.target.value)
  }

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods,newFood]
    setFoods(newFoodArray)
  }
  function HandleClick({id,name,cuisine,heatLevel}){
    console.log(id)
    const DlArray =foods.map((food)=> {
      if (food.id ===id){
        return{
          id,name,cuisine,heatLevel:
          heatLevel =heatLevel+1
        }}
       else {return food}
      })
    setFoods(DlArray)
  }
  const foodfilter =foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=>HandleClick(food)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=>HandleClick(food)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
    <button onClick={handleAddFood}>Add New Food</button>
    <ul>{foodList}</ul>
    <select name="filter" onChange={handleFilterChange}>
      <option value="All">All</option>
      <option value="American">American</option>
      <option value="Sichuan">Sichuan</option>
      <option value="Thai">Thai</option>
      <option value="Mexican">Mexican</option>
    </select>
    <ul>
    {foodfilter}
    </ul>
    </div>
  );
}

export default SpicyFoodList;
