import Cards from './components/card/Cards'
import Text from './components/text/Text'
import { Row, Button, Container } from 'react-bootstrap'
import RootLayout from '../../layouts/RootLayout'
import SearchBar from '../../components/ui/SearchBar'
import ButtonBack from '../../components/ui/ButtonBack'

const About = () => {
  return (
    <RootLayout title="Quienes Somos" backButton={<ButtonBack />} searchBar={<SearchBar />}>
      <Container>
        <Text />
        <Cards />
        <Row className="justify-content-center">
          <Button variant="dark" size="lg" className="col-12 col-md-6 rounded-pill">
            CONTACTAR
          </Button>
        </Row>
      </Container>
    </RootLayout>
  )
}

export default About
