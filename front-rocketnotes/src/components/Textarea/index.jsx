import { Container } from './styles'

// eslint-disable-next-line react/prop-types
const Textarea = ({value, ...props}) => {
  return (
    <Container {...props}>
    {value}
  </Container>
  )
}

export default Textarea