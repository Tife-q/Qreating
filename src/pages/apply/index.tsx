import Layout from "@/layout/normal";
import styles from '@/styles/Apply.module.css'
import Head from "next/head";
import { Inter } from 'next/font/google'
import { Button, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FaCalendarAlt, FaDollarSign, FaExpandArrowsAlt, FaUsers } from "react-icons/fa";
import Slider from "react-slick";


const inter = Inter({ subsets: ['latin'] })

function ApplyCoach() {
    let settings = {
        dots: false,
        infinite: true,
        pauseOnHover: false,
        rows:1,
        slidesToScroll: 1,
        slidesToShow: 8,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        speed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
        ]
    };

    return (<>
        <Head>
            <title>Coach with passion. Earn with purpose.</title>
            <meta name="description" content="Qreating is a marketplace for creatives seeking personalised growth. Connect with industry experts for 1-on-1 and group sessions, boosting your skills and artistry. Ignite your creative journey today." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={`${inter.className}`}>
            <Container className={`${styles.main}`} >
                <section className={`${styles.hero}`}>
                    <Row style={{ width: "100%" }}>
                        <Col xs={12} sm={8}>
                            <h1>Coach with <b>passion.</b><br /> Earn with <b>purpose.</b></h1>
                            <h6>With Qreating Inspire passionate individuals to achieve their <br />goals with live 1-on-1 or group video sessions</h6>
                            <br />
                            <Link href="https://app.qreating.io/registration"><Button className='button2'>Sign up</Button></Link>
                            <br /><br />
                            {/* <img src="/lin.png" style={{ width: "100%", maxWidth: "500px", opacity: "0.6" }} /> */}
                        </Col>

                        <Col xs={12} sm={4}>
                            <div className={styles.imageCOl}>

                            </div>
                            <p></p>
                        </Col>
                    </Row>
                </section>
            </Container>

            <div className={styles.coachingbg}>
                <Slider {...settings}>
                    <div><img src="/s1.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s2.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s3.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s1.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s2.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s3.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s1.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s2.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s3.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s1.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s2.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s3.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s1.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s2.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s3.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s1.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s2.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                    <div><img src="/s3.png" style={{ width: "100%", maxWidth: "150px" }} /></div>
                </Slider>
            </div>

            <section>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={4} style={{ padding: "20px" }}>
                            <h2>Here&apos;s why you should start coaching on <b>Qreating</b> today</h2>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <div className={styles.imageColData}>
                                <div>
                                    <FaCalendarAlt className='icon-howitworks' />
                                    <b><h3>Flexible coaching schedule</h3></b>
                                    <p>Enjoy the flexibility of setting your own schedule and designing your own live 1-on-1 or group video sessions.</p>
                                </div>
                                <br />
                                <div>
                                    <FaDollarSign className='icon-howitworks' />
                                    <b><h3>Profit of your passion</h3></b>
                                    <p>Partner with us and enjoy high earnings with 100% of your income paid directly to you.(whilst we&apos;re in beta)!</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={4}>
                            <div className={styles.imageColData}>
                                <div>
                                    <FaUsers className='icon-howitworks' />
                                    <b><h3>Be part of a collaborative community</h3></b>
                                    <p>Join an exclusive community of creative coaches, collaborate and share ideas with like-minded professionals.</p>
                                </div>
                                <br />
                                <div>
                                    <FaExpandArrowsAlt className='icon-howitworks' />
                                    <b><h3>Expand your brand</h3></b>
                                    <p>Unlock your coaching potential and build your online presence with Qreating - create valuable sessions and expand your reach!</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <br />
                </Container>
            </section>

            <Container>
                <br /><br /><br />
                <br />
                <b ><h1 style={{ fontWeight: "700" }}>How to become a coach at Qreating</h1></b><br />
                <h4>Let&apos;s Walk You Through the Application Process!</h4>
            </Container>
            <div className={styles.colouredShape1}></div>
            <section className={styles.colouredbg}>
                <Container>
                    <Row>
                        <Col xs={12} sm={7}>
                            <h3><span>1. </span>Submit your application</h3>
                            <p style={{ fontSize: "21px" }}>Complete the application and move closer to joining our community</p>
                        </Col>
                        <Col xs={12} sm={5}>
                            <center><img src="/signup.jpg" className={styles.imagea} /></center>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className={styles.colouredShape2}></div>

            <section>
                <Container>
                    <Row className="flexReverseMobile">
                        <Col xs={12} sm={5}>
                            <center><img src="/vibe.jpg" className={styles.imagea} /></center>
                        </Col>
                        <Col xs={12} sm={7}>
                            <h3><span>2. </span>Vibe check</h3>
                            <p style={{ fontSize: "21px" }}>If we think you&apos;re a good fit, we&apos;ll be in touch with the next steps.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className={styles.colouredShape1}></div>

            <section className={styles.colouredbg}>
                <Container>
                    <Row>
                        <Col xs={12} sm={7}>
                            <h3><span>3. </span>Get accepted & share it loudly!</h3>
                            <p style={{ fontSize: "21px" }}>If you&apos;re accepted then you can officially shout out that you&apos;re a coach at Qreating!</p>
                        </Col>
                        <Col xs={12} sm={5}>
                            <center><img src="/shout.jpg" className={styles.imagea} /></center>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className={styles.finalSection}>
                <Container>
                    <Row className={styles.halftwo}>
                        <Col xs={12} sm={6}>
                            <img src="/coaching.png" style={{ width: "100%" }} />
                        </Col>
                        <Col xs={12} sm={6}>
                            <div>
                                <h5>Be part of a group of visionaries, shape the future of creativity</h5>
                                <br />
                                <h2>Join our exclusive coaching community</h2>
                                <br />
                                <br />
                                <Link href="https://www.qreating.io/apply"><Button className='button1'>Become A Coach</Button></Link>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    </>)
}
export default Layout(ApplyCoach)