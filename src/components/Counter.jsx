import React, { useState, useEffect } from 'react'

export function Counter() {
  // instead of export default ^^
  const [count, setCount] = useState(0)
  const [isHappy, setIsHappy] = useState(true)

  function handleClickHappy() {
    setIsHappy(!isHappy)
  }

  function handleClickButton() {
    setCount(count + 1)
  }

  function handleClickButton2() {
    setCount(count + 2)
  }

  useEffect(function pageLoaded() {
    console.log('PAGE LOADED')
  }, [])

  useEffect(
    //function to call when change occurs
    function theCountChanged() {
      console.log(`Wow, the count changed and is now ${count} - and I am 
      ${isHappy ? 'happy' : 'not happy'}`)
    },
    //variale to track for changes
    [count, isHappy]
  )

  return (
    <div>
      <p>
        Count: {count}
        <button onClick={handleClickButton}>Click Me</button>
        <button onClick={handleClickButton2}>Click Me!</button>
      </p>
      <p>Am I happy: {isHappy ? 'Yes' : 'No'}</p>
      <button onClick={handleClickHappy}> Toggle Happiness</button>
    </div>
  )
}
