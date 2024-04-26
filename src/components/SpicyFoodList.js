import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

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

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={()=>HandleClick(food)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
