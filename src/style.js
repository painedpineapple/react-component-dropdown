import styled from 'react-emotion'

export default {}

export const P = styled('p')(() => ({
  maxWidth: '800px',
  fontSize: 18,
  margin: 30,
}))

export const Nav = styled('nav')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  position: 'relative',
  width: '100%',
})
