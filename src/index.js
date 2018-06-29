import React from 'react'
import { render } from 'react-dom'
import faker from 'faker'
import _ from 'lodash'
//
import Dropdown from './components/Dropdown'
import customStyles, { P, Nav } from './style'

class App extends React.Component<{}> {
  state = {
    menuIsActive: false,
  }
  toggleMenu = () =>
    this.setState(prevState => ({ menuIsActive: !prevState.menuIsActive }))
  render() {
    return (
      <div>
        <Nav>
          <button onClick={this.toggleMenu}>Toggle Dropdown</button>
          <Dropdown
            options={{
              isActive: this.state.menuIsActive,
              toggleIsAcitve: this.toggleMenu,
              styles: customStyles,
            }}
          >
            <ul>
              <li>
                <span>item</span>
              </li>
              <li>
                <span>item</span>
              </li>
              <li>
                <span>item</span>
              </li>
              <li>
                <span>item</span>
              </li>
            </ul>
          </Dropdown>
        </Nav>
        <div style={{ marginTop: 80 }}>
          {_.times(20, () => (
            <P key={faker.random.uuid()}>{faker.lorem.paragraph()}</P>
          ))}
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
