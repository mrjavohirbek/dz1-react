import React from 'react'
import WithData from '../../../helpers/WithData'
function usersDetails({users}) {
  return (
    <div>
        <div>{users[0].name}</div>
        <div>{users[0].id}</div>    
            <div>{users[0].company.name}</div>    
                <div>{users[0].username}</div>
                <div>{users[0].wibsite}</div>
                <div>{users[0].bs}</div>
    </div>
  )
}

export default WithData(usersDetails)