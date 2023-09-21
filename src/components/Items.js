import React from 'react'

const Items = (props) => {
  console.log(props.includePrice)
  return (
    <>
      {props.items.map(item => (
        <tr>
            <td>{item.name}</td>
            <td>{props.includePrice && `$${item.price}`}</td>
        </tr>
      ))}
    </>
  )
}

export default Items
