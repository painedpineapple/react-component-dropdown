import React from 'react'
import { Transition, animated } from 'react-spring'
//
import Container from './index.style'

const AnimatedContainer = animated(Container)

type tProps = {
  children: any,
  options: {
    toggleIsAcitve: () => void,
    isActive: boolean,
    styles?: {},
  },
}

type tState = {}

export default class Dropdown extends React.Component<tProps, tState> {
  containerRef: any
  componentDidMount() {}
  componentWillUnmount() {
    this.addClickListener()
  }
  componentDidUpdate(prevProps) {
    if (this.props.options.isActive !== prevProps.options.isActive) {
      this.props.options.isActive
        ? this.addClickListener()
        : this.removeClickListener()
    }
  }
  addClickListener = () => {
    if (typeof document !== 'undefined') {
      document.addEventListener('click', this.outsideClickListener)
    }
  }
  removeClickListener = () => {
    if (typeof document !== 'undefined') {
      document.removeEventListener('click', this.outsideClickListener)
    }
  }
  outsideClickListener = (event: any) => {
    if (
      this.containerRef &&
      // $FlowFixMe
      !this.containerRef.contains(event.target)
    ) {
      this.props.options.toggleIsAcitve()
    }
  }
  render() {
    const {
      options: { isActive, toggleIsActive, ...options },
      children,
      ...attrs
    } = this.props

    return (
      <Container
        {...attrs}
        options={{
          ...options,
          styles: options ? options.styles || {} : {},
        }}
        innerRef={ref => {
          this.containerRef = ref
        }}
      >
        <Transition
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {isActive && (
            <animated.div>
              <span className="triangle" />
              {children}
            </animated.div>
          )}
        </Transition>
      </Container>
    )
  }
}

// {
//   styles =>
//   isActive && (
//     <animated.div style={styles}>
//       <span className="triangle" />
//       <ul>{children}</ul>
//     </animated.div>
//   )
// }
