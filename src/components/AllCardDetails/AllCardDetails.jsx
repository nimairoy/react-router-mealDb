import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

const AllCardDetails = ({meal}) => {
    // console.log(meal)
    const {strMealThumb, strMeal, strInstructions} = meal;

    const navigate = useNavigate();

    const handleGoBack = ()=>{
        navigate(-1);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Img className='p-5 thumbnail img-rounded' src={strMealThumb} />
                        <Card.Body>
                            <Card.Title className='card-title'>{strMeal}</Card.Title>
                            <Card.Text>
                                {strInstructions}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                             <Link onClick={handleGoBack}><button className='btn btn-primary'>Go Back</button></Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AllCardDetails;