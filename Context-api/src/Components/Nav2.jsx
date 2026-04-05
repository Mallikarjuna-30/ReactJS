import React from 'react'

const Nav2 = (props) => {
    return (
        <div className='nav2'>
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Contact</h2>
            <button onClick={() => props.setTheme(props.theme === "light" ? "dark" : "light")}>Toggle</button>
        </div>
    )
}

export default Nav2