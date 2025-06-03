import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    updateName,
    updateEmail,
    updatePhone,
    updateAddress,
    } from '../Store/reducer/actions/user'

const User = () => {
    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const [updateText, setUpdateText] = useState('')
  return (
    <div>
        <h1>User Profile</h1>
        <p>Name: {User.name}</p>
        <p>Email: {User.email}</p>
        <p>EPhone: {User.phone}</p>
        <p>EAddress: {User.address}</p>

        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap:  '10px'
            }}
        >

        </div>

        <div>
            <input
            type='text' 
            placeholder='Enter name/email/phone/address'
            value={updateText}
            onInput={(e) => setUpdateText(e.target.value)}
            />
            <button
            value={updateText}
                onClick={() => dispatch(updateName(updateText))}
            >Update Name</button>
            <button
                onClick={() => dispatch(updateEmail(updateText))}
            >Update email</button>
            <button
                onClick={() => dispatch(updatePhone(updateText))}
            >Update phone</button>
            <button
                onClick={() => dispatch(updateAddress(updateText))}
            >Update address</button>
        </div>
    </div>
  )
}

export default User