
import { useState } from 'react'
import '../App.css'
function Parent() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={styles.container}>
      <h1>Parent</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}
      >Increment</button>
      <Child count={count} setCount={setCount}/>
      </div>
    </>
  )
}

export default App