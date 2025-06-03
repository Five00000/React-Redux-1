import { useSelector, useDispatch } from "react-redux"
import { INCREMENT } from "../Store/reducer/actions/counter"
const styles = {
    container: {
      border: '1px solid black',
      padding: '10px',
      margin: '10px'
    }
  }

const GrandChild = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
  return (
      <div style={styles.container}>
        <h2>GrandChild</h2>
        <p>Count: {count}</p>
        <button onClick={() => dispatch({ type: INCREMENT})}
        >
            INCREMENT
        </button>
        
      </div>
  )
}

export default GrandChild