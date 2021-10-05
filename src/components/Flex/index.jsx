import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Flex = forwardRef(({
    className,
    flexGrow,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    children,
    Tag = 'div',
    ...rest
}, ref) => (
    <Tag
        {...{
            ref,
            className: cx(
                'Flex',
                className,
            ),
            style: {
                ...flexGrow && { flexGrow },
                ...flexDirection && { flexDirection },
                ...justifyContent && { justifyContent },
                ...alignItems && { alignItems },
                ...flexWrap && { flexWrap },
            },
            ...rest,
        }}
    >
        {children}
    </Tag>
))

Flex.propTypes = {
    className: PropTypes.string,
    flexGrow: PropTypes.number,
    flexDirection: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    flexWrap: PropTypes.string,
    children: PropTypes.node.isRequired,
    Tag: PropTypes.any,
}

export default Flex
