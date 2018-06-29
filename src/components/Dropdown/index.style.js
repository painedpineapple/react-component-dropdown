import styled from 'react-emotion'

const color = {
  white: ['255,255,255'],
  black: ['44, 42, 41'],
  gray: ['197, 198, 198'],
  red: ['203,51,59'],
  blue: ['0,114,206'],
}

export default styled('div')(({ options: o }) => ({
  position: 'absolute',
  right: 0,
  zIndex: 100,
  top: 'calc(100% + 15px)',

  '.triangle': {
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: `13px solid rgb(${color.white[0]})`,
    display: 'block',
    position: 'absolute',
    right: 10,
    top: 0,
    transform: 'translateY(-100%)',
  },

  '> div': {
    margin: 0,
    background: `rgb(${color.white[0]})`,
    boxShadow: '2px 2px 16px rgba(0, 0, 0, 0.15)',
    minWidth: 200,
  },

  ...o.styles,
}))
