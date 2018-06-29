import React from 'react'
import { Transition, animated } from 'react-spring'
//
import Container from './index.style'

type tProps = {
  children: any,
  options: {
    toggleIsAcitve: () => void,
    isActive: boolean,
    styles?: {},
  },
}

type tState = {
  items: Array<{ id: string }>,
}

export default class Dropdown extends React.Component<tProps, tState> {
  state = {
    items: [],
  }
  containerRef: any
  componentDidMount() {}
  componentWillUnmount() {
    this.activateMenu()
  }
  componentDidUpdate(prevProps) {
    if (this.props.options.isActive !== prevProps.options.isActive) {
      this.props.options.isActive ? this.activateMenu() : this.deactivateMenu()
    }
  }
  activateMenu = () => {
    this.setState({ items: [{ id: 'dropdown' }] })
    if (typeof document !== 'undefined') {
      document.addEventListener('click', this.outsideClickListener)
    }
  }
  deactivateMenu = () => {
    this.setState({ items: [] })
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
          keys={this.state.items.map(item => item.id)}
        >
          {this.state.items.map(() => styles => (
            <animated.div style={styles}>
              <span className="triangle" />
              <div>{children}</div>
            </animated.div>
          ))}
        </Transition>
      </Container>
    )
  }
}
