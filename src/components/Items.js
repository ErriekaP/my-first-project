import React from 'react'

const Items = ({showOnlystock, ...props}) => {
  console.log(showOnlystock)
  console.log(props.query)
  return (
    <>
      {props.items
      .filter(item => showOnlystock ? item.stock > 0 : item )
      .filter(item => item.name.toLowerCase().includes(props.query))
      .map(item => (
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
