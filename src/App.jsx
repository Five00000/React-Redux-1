import './App.css'
import { useState } from 'react'
import Child from './components/Child'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount } from './Store/reducer/actions/counter'

const styles = {
  container: {
    border: '1px solid black',
    padding: '10px',
    margin: '10px'
  }
}



function App() {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  

  return (
    <div style={styles.container}>
      <h1>Parent</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => dispatch(incrementCount())}
      >
        INCREMENT
      </button>

      <button
        onClick={() => dispatch(decrementCount())}
      >
        DECREMENT
      </button>
      <Child />
    </div>
  )
}

export default App


/*
  # Props drillings
    - States and state handlers need to be drilled down through the component heirarchy till that nested component which requires access to the saved and/or state handle. Sometimes due to this the props have to past though those componets as well which might not require access to the state and state handlers.

    -

    - To solve this problem we need access to a 'central state', which can be provided by 'Redux'. 




    - Explore
      - Lifting the state up. (Another similiar problem)
      - To solve both of these problems we need to use react

  # Redux:
    - A central store for React application
      - Components can 'subscribe' to this store to get notified on state changes

    - Reducer function:
      - A function that returns an updated state based on action types. (It contains a switch case with all action types possible)
        - Define the initial state, and assign it as the default value to the state parameter
        - List down rules to update state based on action types
        - Has 2 parameters
          - State: The current state object
          - Action: An object with 'type' property

    - Action: An object with 'type' property which is intended to preform an update on the state based on the rule written in the reducer function 
      - Components can 'dispatch' these actions using the event handlers

  # Steps to work with redux store in react app
    - Install: npm i redux react-redux
    - Create: 
      - Create a reducer function, inital state
      - Pass reducer function as an argument to createStore method to create a store and export it
    - Connect redux store with React app
      - Import redux store in App.jsx, and pass it as props to Provider component. Provider component is an HOC provided by 'react-redux' package which will wrap App component and provide access to redux store
    - Access redux and update redux state in react components
      - Access:
        - 'useSelector' hook can be used to select a specific state from the redux store
        - This hook is offered by 'react-redux'
      
      - Update:
        - 'useDispatch' hook can be used to get access to the dispatch method, which can further be used to dispatch 


  # Reference:
    - redux.js.org
    - react-redux.js.org

  


*/
