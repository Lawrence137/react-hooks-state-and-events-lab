import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)
  const appClass = inCart ? "in-cart" : ""


  const [add, setAdd] = useState(true)
  const buttonClass = add ? "add" : "remove"

  const [text, setText] = useState(true)
  const buttonText = text ? "Add to Cart" : "Remove From Cart"

  function toggleClass(){
    setAdd(!add)
    setInCart(!inCart)
    setText(!text)
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={toggleClass}>{buttonText}</button>
    </li>
  );
}

export default Item;
