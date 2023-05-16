import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
    const { title } = props
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}


export default Header

Header.propTypes = {
    title: PropTypes.string
} 