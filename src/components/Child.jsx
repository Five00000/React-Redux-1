import { useSelector } from 'react-redux'
import GrandChild from './GrandChild'
const styles = {
    container: {
      border: '1px solid black',
      padding: '10px',
      margin: '10px'
    }
  }

const Child = () => {
    const count = useSelector((state) => state.count)
  return (
      <div style={styles.container}>
        <h2>Child</h2>
        <p>Count: {count}</p>
        <GrandChild />
      </div>
  )
}

export default Child