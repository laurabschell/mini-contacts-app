import React from 'react'
import Card from '../Card/Card'


const CardDisplay = ({items}) => {

    console.log(items)
    return (
      <div className="card-list">
        {items.map((user) => (
            <Card
              user_id={user.id}
              user_first_name={user.first_name}
              user_last_name={user.last_name}
              user_email={user.email}
              user_is_favorite={user.is_favorite}
              user={user}
            />
          ))
        }
      </div> 
    )
}

export default CardDisplay
