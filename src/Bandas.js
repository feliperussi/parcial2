import { useState } from "react";
import { Card, Col, Row, Container, Table } from "react-bootstrap";
import BandDetail from "./Bandas-detail";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormattedMessage } from 'react-intl';
// Show a table with columns #, Name, Country, Genre, Foundation Year
function Bandas(bands) {
    // Verify that the bands are not empty

    const [actualDetail, setActualDetail] = useState([]);

    function handleClick(band) {
        setActualDetail(band);
        console.log(actualDetail);
    }

    if (bands.bands.length > 0) {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th><FormattedMessage id="Name" /></th>
                                        <th><FormattedMessage id="Country" /></th>
                                        <th><FormattedMessage id="Genre" /></th>
                                        <th><FormattedMessage id="FoundationalYear" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bands.bands.map((band, index) => (
                                        <tr key={index} onClick={() => handleClick(band)}>
                                            <td>{index + 1}</td>
                                            <td>{band.name}</td>
                                            <td>{band.country}</td>
                                            <td>{band.genre}</td>
                                            <td>{band.foundation_year}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Col>
                        <Col>
                            <BandDetail band={actualDetail} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Bandas;