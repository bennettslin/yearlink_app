import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Paragraph = ({
    className,
    children,
}) => (
    <p
        {...{
            className: cx(
                'Paragraph',
                className,
            ),
        }}
    >
        {children}
    </p>
)

Paragraph.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Paragraph
