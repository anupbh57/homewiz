import React from 'react'
import User from '../Images/user.jpg'
function AccountInfo() {
  return (
    <div className='accountinfo py-4 absolute top-0'>
        <img src = {User} className="rounded-full m-auto p-2" width="60px"/>
    </div>
  )
}

export default AccountInfo