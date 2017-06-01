import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import {
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

import Segment from '../../elements/Segment/Segment'

/**
 * A tab pane holds the content of a tab.
 */
function TabPane(props) {
  const { active, children, className, loading } = props
  const classes = cx(
    'ui',
    useKeyOnly(loading, 'loading'),
    'active tab',
    className
  )

  const rest = getUnhandledProps(TabPane, props)
  const ElementType = getElementType(TabPane, props)

  const calculatedDefaultProps = {}
  if (ElementType === Segment) {
    calculatedDefaultProps.attached = 'bottom'
  }

  return (
    <ElementType
      {...calculatedDefaultProps}
      {...rest}
      active={active}
      children={children}
      className={classes}
      loading={loading}
    >
      {children}
    </ElementType>
  )
}

TabPane._meta = {
  name: 'TabPane',
  parent: 'Tab',
  type: META.TYPES.MODULE,
}

TabPane.defaultProps = {
  as: Segment,
}

TabPane.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A tab can be activated, and visible on the page. */
  active: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Primary content. */
  children: PropTypes.string,

  /** A Tab.Pane can display a loading indicator. */
  loading: PropTypes.bool,
}

TabPane.create = createShorthandFactory(TabPane, children => ({ children }), true)

export default TabPane
