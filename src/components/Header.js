import React from 'react'

const Header = () => {
  return (
    <tr>
        <td style={{
            fontWeight:'bold',
            color: 'red'
        }}
        >Name</td>

        <td style={{
            fontWeight:'bold',
            color: 'red'
        }}>Price</td>

      <td style={{
            fontWeight:'bold',
            color: 'red',
            paddingLeft: '50px'
        }}>Stock</td>

    </tr>
  
  )
}

export default Header
