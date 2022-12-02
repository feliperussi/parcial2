// Show a card with the detail of the band
import { Card, Col, Row, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function BandasDetail(band) {
    // Verify that the band is not null
    if (band.length === 0) {
        return null;
    }
    return (
        <div>
            <Container fluid>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={band.band.image} />
                    <Card.Body>
                        <Card.Text>
                            {band.band.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}
export default BandasDetail;