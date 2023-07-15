import styles from '@/styles/Header.module.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaBars } from 'react-icons/fa';


const inter = Inter({ subsets: ['latin'] })

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (<>
        <div className={`${inter.className} ${styles.Navbar}`} >
            <Container>
                <Row className={`${styles.rownavbar}`}>
                    <Col xs={6} sm={3}>
                        <div style={{position:"relative"}}>
                            <span className='beta'>Beta</span>
                            <img className={`${styles.logo}`} src="https://uploads-ssl.webflow.com/63fba0d3d15927e36846ab51/6406741cf7b8078dff5ff5bb_email-p-500.webp" />
                        </div>
                    </Col>
                    <Col xs={6} sm={9}>
                        <div className={`${styles.ctaButtons}`}>
                            <Link style={{ fontWeight: 600, color: 'black', textDecoration: "none", marginRight: "15px" }} href='https://www.qreating.io/apply'>Become a Coach</Link><br />
                            <Link style={{ fontWeight: 600, color: 'black', textDecoration: "none", marginRight: "15px" }} href='https://www.qreating.io/discover-coaches'>Find a Coach</Link><br /><br />
                            <Link href="https://app.qreating.io/login"><Button className='button1'>Login</Button></Link>
                            <Link href="https://app.qreating.io/registration"><Button className='button2'>Get Started</Button></Link>
                        </div>
                        <div className={styles.mobileMenu}>
                            <FaBars onClick={handleShow} />
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Link style={{ fontWeight: 600, color: 'black', textDecoration: "none" }} href='https://www.qreating.io/apply'>Become a Coach</Link><br />
                                    <Link style={{ fontWeight: 600, color: 'black', textDecoration: "none" }} href='https://www.qreating.io/discover-coaches'>Find a Coach</Link><br /><br />
                                    <Link href="https://app.qreating.io/login"><Button className='button1'>Login</Button></Link>
                                    <Link href="https://app.qreating.io/registration"><Button className='button2'>Get Started</Button></Link>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>)
}

export default Header