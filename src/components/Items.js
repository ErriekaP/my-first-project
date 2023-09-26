import React from 'react'

const Items = ({showOnlystock, ...props}) => {
  console.log(showOnlystock)
  console.log(props.query)
  return (
    <>
      {props.items
      .filter(item => !props.isChecked || item.stock > 0 )
      .filter(item => item.name.toLowerCase().includes(props.query))
      .map(item => (
        <tr key={item.id} onClick={() => alert(`${item.name} - ${item.price}`)}>
            <td>{item.name}</td>
            <td>{props.includePrice && `$${item.price}`}</td>
            <td style={{paddingLeft: '50px'}}>{item.stock}</td>
        </tr>
      ))}
    </>
  )
}

export default Items
