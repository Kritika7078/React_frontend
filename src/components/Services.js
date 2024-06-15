import { Container, Row,Col ,Card,Button} from "react-bootstrap"

export const Services=()=>{
    return(
        <section id="services">
            <div className="services">
            <div  >
                <h1 className="services-heading">Services</h1>
            </div>
            <Container>
                <Row>
                    <div className="service-cards">
                <Col md={3} id="cards1">
                        <Card id="service-card">
                           
                            <Card.Img id="service-img" src="images/8.jpg"/>
                          
                            <Card.Body>
                               <Card.Title>Customizable User Accounts</Card.Title>
                               <Card.Text>Differentiated access for admin and super admin with unique functionalities</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} id="cards1">
                        <Card id="service-card">
                            
                            <Card.Img id="service-img" src="images/9.jpg"/>
                        
                            <Card.Body>
                               <Card.Title>Easy Access Anywhere</Card.Title>
                               <Card.Text>Retrieve your data from your digital locker anytime, anywhere</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} id="cards1">
                        <Card id="service-card">
                            
                            <Card.Img id="service-img" src="images/7.jpg"/>
                            
                            <Card.Body>
                               <Card.Title>Secure Data Storage</Card.Title>
                               <Card.Text>Safely store your digital data with advanced encryption</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    </div>
                </Row>
            </Container>
            </div>
        </section>
    )
}