import React from 'react'

const Items = (props) => {
  console.log(props.includePrice)
  return (
    <>
      {props.items.map(item => (
        <tr key={item.id} onClick={() => alert(`${item.name} - ${item.price}`)}>
            <td>{item.name}</td>
            <td>{props.includePrice && `$${item.price}`}</td>
            <td>{item.stock}</td>
        </tr>
      ))}
    </>
  )
}

export default Items
