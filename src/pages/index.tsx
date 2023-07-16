import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Splash from '@/components/Splash'
import { Row, Col, Container, Button, Card } from 'react-bootstrap'
import { FaDesktop, FaGlobe, FaHandshake, FaLink, FaPencilAlt, FaPhotoVideo, FaUnlockAlt, FaUserTie, FaUsers, FaVideo } from "react-icons/fa";
import Slider from "react-slick";
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';
import Layout from '@/layout/normal'


const inter = Inter({ subsets: ['latin'] })

function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };
  return (
    <>
      <Head>
        <title>Qreating: Find a Coach. Unlock Creativity.</title>
        <meta name="description" content="Qreating is a marketplace for creatives seeking personalised growth. Connect with industry experts for 1-on-1 and group sessions, boosting your skills and artistry. Ignite your creative journey today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Splash />
      <main className={`${inter.className}`}>
        <Container className={`${styles.main}`}>
          <section className={`${styles.hero}`}>
            <Row>
              <Col xs={12} sm={8}>
                <h6>EMPOWERING TODAY&apos;S AND TOMORROW&apos;S CREATIVES</h6>
                <h1>Experience Personalised Coaching from Top Writing Professionals</h1>
                <Link href="https://www.qreating.io/discover-coaches"><Button className='button1'>Find a Coach</Button></Link>
                <Link href="https://app.qreating.io/registration"><Button className='button2'>Sign up</Button></Link>
              </Col>
            </Row>
          </section>
        </Container>

        <Container>
          <section className={`${styles.sectionDark}`}>
            <Row >
              <Col xs={12} sm={12} md={12} lg={3}>
                <h1 style={{ fontSize: '52px', fontWeight: 800 }}>What is Qreating?</h1>
              </Col>
              <Col xs={12} sm={12} md={12} lg={9} className={styles.paddingLeft}>
                <p>Its a marketplace where writers can connect with indsutry professionals for coaching through live video 1:1 or group sessions.
                  The type of writers/professionals are Screenwriters, Songwriters, Journalists, playwrights, & creative writers at the moment.</p>
                <Row>
                  <Col xs={12} sm={6}>
                    <Card className='iconbox-card'>
                      <FaHandshake className='icon-iconbox' />
                      Connect with top professionals
                    </Card>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Card className='iconbox-card'>
                      <FaPhotoVideo className='icon-iconbox' />
                      Book 1:1 or group videos calls
                    </Card>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Card className='iconbox-card'>
                      <FaUsers className='icon-iconbox' />
                      Join a vibrant community
                    </Card>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Card className='iconbox-card'>
                      <FaUnlockAlt className='icon-iconbox' />
                      Unlock your full potential
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </section>
          <section>
            <Row style={{ alignItems: "start" }}>
              <Col xs={12} sm={12} md={12} lg={4}>
                <div className={styles.imageCOl}>

                </div>
                <p></p>
              </Col>
              <Col xs={12} sm={12} md={12} lg={8} >
                <div className={styles.imageColData}>
                  <Row >
                    <Col xs={12} sm={12} md={12} lg={6}>

                      <h1><b>How it Works</b></h1>
                      <p>Unlocking Creativity, One Door At A Time</p>
                      <br />
                      <Link href="https://www.qreating.io/discover-coaches"><Button className='button1'>Find a Coach</Button></Link>
                      <br /><br />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={6}>
                      <div>
                        <FaGlobe className='icon-howitworks' />
                        <b><h3>Discover</h3></b>
                        <p>Discover Top Industry Professionals - Writers, Journalists, Filmmakers, and More - on Qreating!</p>
                      </div>
                      <br />
                      <br />
                      <br />
                      <div>
                        <FaLink className='icon-howitworks' />
                        <b><h3>Connect</h3></b>
                        <p>Connect with top creatives for guidance on achieving your creative goals. Experience 1:1 or group video sessions today.</p>
                      </div>
                      <br /><br /><br />
                      <div>
                        <FaUserTie className='icon-howitworks' />
                        <b><h3>Elevate</h3></b>
                        <p>Unlock Your Potential with Personalised Coaching - Gain Perspectives, Learn Skills, Achieve Goals with Confidence</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
        <section className={styles.sectionStaff}>
          <Container>
            <center><h1 style={{ fontWeight: 600 }}>Choose from one of our world-class coaches</h1></center>
            <br />
            <Slider {...settings}>
              <div>
                <Card className={styles.StaffCard}>
                  <FaPencilAlt className={styles.iconStaff} />
                  <img src="/damien.jpg" alt='' className={styles.staffImage} />
                  <h5>Derek Uskert</h5>
                  <p>Editor & Passionate Storyteller</p>
                </Card>
              </div>
              <div>
                <Card className={styles.StaffCard}>
                  <FaPencilAlt className={styles.iconStaff} />
                  <img src="/damien.jpg" alt='' className={styles.staffImage} />
                  <h5>Ashley Simpo</h5>
                  <p>Writer, Editor and Author.</p>
                </Card>
              </div>
              <div>
                <Card className={styles.StaffCard}>
                  <FaVideo className={styles.iconStaff} />
                  <img src="/damien.jpg" alt='' className={styles.staffImage} />
                  <h5>Jasmine McGlade</h5>
                  <p>Screenwriter and award-winning director</p>
                </Card>
              </div>
              <div>
                <Card className={styles.StaffCard}>
                  <FaDesktop className={styles.iconStaff} />
                  <img src="/damien.jpg" alt='' className={styles.staffImage} />
                  <h5>Rodrigo Nogueira</h5>
                  <p>Screenwriter, currently working on an animation for Disney</p>
                </Card>
              </div>
              <div>
                <Card className={styles.StaffCard}>
                  <img src="/users.png" alt='' className={styles.staffImage} />
                  <h5>VIEW ALL </h5>
                  <p></p>
                </Card>
              </div>
            </Slider>
          </Container>
        </section>
        <section className={styles.videoSection}>
          <Container>
            <center><h1 style={{ fontWeight: 800 }}>Qreating in 28 seconds...</h1></center>
            <br />
            <iframe className={styles.videoIframe} width="100%" height="600" style={{ borderRadius: '20px' }} src="https://www.youtube.com/embed/7PJ5QP30_n0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </Container>
        </section>
        <section className={styles.blogSection}>
          <Container>
            <center><h1 style={{ fontWeight: 800 }}>Know More about Us</h1></center>
            <br />
            <br />
            <Row>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Link href="https://qreating.notion.site/Blog-a4692fdb359b488ea01a13586c9d2a63"><Card className={styles.blogPost}>
                  <Row>
                    <Col xs={5} lg={5} className={styles.blogImage} style={{
                      backgroundImage: 'url(/post1.jpeg)'
                    }}>

                    </Col>
                    <Col xs={7} lg={7} style={{ padding: "20px" }}>
                      <span style={{ fontSize: '12px' }}>June 6, 23</span>
                      <h5>An Essential Guide to Help You Spark Your Creativity</h5>
                    </Col>
                  </Row>
                </Card></Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Link href="https://qreating.notion.site/Blog-a4692fdb359b488ea01a13586c9d2a63"><Card className={styles.blogPost}>
                  <Row>
                    <Col xs={5} lg={5} className={styles.blogImage} style={{
                      backgroundImage: 'url(/post2.jpeg)'
                    }}>

                    </Col>
                    <Col xs={7} lg={7} style={{ padding: "20px" }}>
                      <span style={{ fontSize: '12px' }}>June 6, 23</span>
                      <h5>7 Things Only Creative People Will Understand</h5>
                    </Col>
                  </Row>
                </Card>
                </Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4}>
                <Link href="https://qreating.notion.site/Blog-a4692fdb359b488ea01a13586c9d2a63"><Card className={styles.blogPost}>
                  <Row>
                    <Col xs={5} lg={5} className={styles.blogImage} style={{
                      backgroundImage: 'url(/post3.jpeg)'
                    }}>

                    </Col>
                    <Col xs={7} lg={7} style={{ padding: "20px" }}>
                      <span style={{ fontSize: '12px' }}>June 6, 23</span>
                      <h5>5 Types of Creative People Who Excel in Creative Thinking</h5>
                    </Col>
                  </Row>
                </Card>
                </Link>
              </Col>
            </Row>

          </Container>
        </section>
        <section className={styles.finalSection}>
          <Container>
            <Row>
              <Col>
                <div className={styles.halfone}>
                  <h5>Need help from a...</h5>
                  <br />
                  <h2>Journalist, Screenwriter, Playwright, Songwriter, Creative Writer</h2>
                  <br />
                  <br />
                  <Link href="https://www.qreating.io/discover-coaches"><Button className='button2'>Find a Coach</Button></Link>
                </div>
              </Col>
              <Col>
                <div className={styles.halftwo}>
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
        <section className={styles.faqSection}>
          <center><h1 style={{ fontWeight: 800 }}>FAQ&apos;s</h1></center>
          <br />
          <br />
          <Container>
            <Accordion defaultActiveKey="0">
              <Row style={{ alignItems: "start" }}>
                <Col xs={12} sm={6} >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>I&apos;m new to the world of creative writing, can I still use Qreating?</Accordion.Header>
                    <Accordion.Body>
                      Absolutely! Qreating caters to individuals at all stages of their creative journey, from beginners to seasoned professionals. Whether you&apos;re venturing into screenwriting, journalism, songwriting, or any other form of creative writing, our expert coaches are here to provide tailored guidance and support.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>How does Qreating handle privacy and security during live video sessions?</Accordion.Header>
                    <Accordion.Body>
                      At Qreating, we prioritise the privacy and security of our users. Our video sessions are conducted on secure platforms with end-to-end encryption. We do not record sessions unless explicitly requested and agreed upon by both parties.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col xs={12} sm={6}>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Can I request for a personalized training plan?</Accordion.Header>
                    <Accordion.Body>
                      Certainly! At Qreating, we promote individualized learning. After pairing with a coach, you can request a custom training plan designed around your specific needs and goals, helping you effectively track and reach your creative objectives.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>How do the live video sessions work? </Accordion.Header>
                    <Accordion.Body>
                      Live video sessions on Qreating provide direct interaction with your chosen coach, either 1:1 or in a group. After scheduling, you&apos;ll receive a conference link to join via your device, allowing you to discuss, receive feedback, and learn from your coach.
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
            </Accordion>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Layout(Home);