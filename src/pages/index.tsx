import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Splash from '@/components/Splash'
import Header from '@/components/header'
import { Row, Col, Container, Button, Card } from 'react-bootstrap'
import { FaDesktop, FaGlobe, FaHandshake, FaInstagram, FaLink, FaLinkedinIn, FaPencilAlt, FaPhotoVideo, FaTwitter, FaUnlockAlt, FaUserTie, FaUsers, FaVideo, FaYoutube } from "react-icons/fa";
import Slider from "react-slick";
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    autplay: true,
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
      <Header />
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
          {/* <section className={`${styles.sectionDark}`}>
            <Row >
              <Col xs={12} sm={3}>
                <h1 style={{ fontSize: '52px', fontWeight: 800 }}>What is Qreating?</h1>
              </Col>
              <Col xs={12} sm={9} className={styles.paddingLeft}>
                <p>Qreating is a digital hub connecting writers with top industry experts for personalized or group coaching via live video sessions. We currently cater to screenwriters, songwriters, journalists, playwrights, and creative writers.</p>
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
          </section> */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          
          <section>
            <Row style={{ alignItems: "start" }}>
              <Col xs={12} sm={4}>
                <div className={styles.imageCOl}>

                </div>
                <p></p>
              </Col>
              <Col xs={12} sm={8} >
                <div className={styles.imageColData}>
                  <Row >
                    <Col xs={12} sm={6}>

                      <h1><b>How it Works</b></h1>
                      {/* <p>Unlocking Creativity, One Door At A Time</p> */}
                      <br />
                      <Link href="https://www.qreating.io/discover-coaches"><Button className='button1'>Find a Coach</Button></Link>
                      <br /><br />
                    </Col>
                    <Col xs={12} sm={6}>
                      <div>
                        <FaGlobe className='icon-howitworks' />
                        <b><h3>Discover</h3></b>
                        <p>Discover Top Industry Professionals - Writers, Journalists, Filmmakers, and More - on Qreating.</p>
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
                        <p>Unlock Your Potential with Personalised Coaching - Gain Perspectives, Learn Skills, Achieve Goals with Confidence.</p>
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
            <center><h1 style={{ fontWeight: 600 }}>  Elevate your writing potential with our coaches</h1></center>
            <br />
            <Slider {...settings}>
              <div>
                <a href='https://www.qreating.io/coach-profile-page?user_id=rodrigo-nogueira' target="_blank">
                <Card className={styles.StaffCard}>
                  <FaPencilAlt className={styles.iconStaff} />
                  <img src="/rodrigo.png" alt='' className={styles.staffImage} />
                  <h5>Rodrigo Nogueira </h5>
                  <p>Screenwriter</p>
                  <p>working on an animation for Disney</p>
                  <img src="/disney.jpg" alt='' className={styles.workreel} />
                </Card>
                </a>
              </div>
              <div>
                <a href='https://www.qreating.io/coach-profile-page?user_id=jasmine-mcglade' target='_blank'>
                <Card className={styles.StaffCard}>
                  <FaPencilAlt className={styles.iconStaff} />
                  <img src="/jasmine.png" alt='' className={styles.staffImage} />
                  <h5>Jasmine McGlade</h5>
                  <p>Writer, Editor and Author.</p>
                  <p>Working on Fencer starring Nicholas Hault, Kiki Layne</p>
                  <img src="/lala.jpg" alt='' className={styles.workreel} />
                </Card>
                </a>
              </div>
              <div>
                <a href='https://www.qreating.io/coach-profile-page?user_id=des-yankson' target='_blank'>
                <Card className={styles.StaffCard}>
                  <FaVideo className={styles.iconStaff} />
                  <img src="/des.jpeg" alt='' className={styles.staffImage} />
                  <h5>Des Yankson </h5>
                  <p>Actor. Writer. Voice Artist</p>
                  <p>Actor turned writer, crafting for theatre, TV, film, and you.</p>
                  <img src="/breeders.jpg" alt='' className={styles.workreel} />
                </Card>
                </a>
              </div>
              <div>
                <a href='https://www.qreating.io/coach-profile-page?user_id=jill-lupupa' target='_blank'>
                <Card className={styles.StaffCard}>
                  <FaDesktop className={styles.iconStaff} />
                  <img src="/jill.png" alt='' className={styles.staffImage} />
                  <h5>Jill Lupupa</h5>
                  <p>Freelance Journalist Writer</p>
                  <p>Interviewed renowned artists for tmrw Magazine.</p>
                  <img src="/people.png" alt='' className={styles.workreel} />
                </Card>
                </a>
              </div>
              <div>
                <a href='https://www.qreating.io/coach-profile-page?user_id=jill-lupupa' target='_blank'>
                <Card className={styles.StaffCard}>
                  <FaDesktop className={styles.iconStaff} />
                  <img src="/ashley.png" alt='' className={styles.staffImage} />
                  <h5>Ashley Simpo</h5>
                  <p>Freelance Journalist Writer</p>
                  <p>Managed editorial teams at CRWNMAG and A Kids Co.</p>
                  <img src="/crwnmag.jpg" alt='' className={styles.workreel} />
                </Card>
                </a>
              </div>
              <div>
                <a href='https://www.qreating.io/coach-profile-page?user_id=jill-lupupa' target='_blank'>
                <Card className={styles.StaffCard}>
                  <FaDesktop className={styles.iconStaff} />
                  <img src="/simon.png" alt='' className={styles.staffImage} />
                  <h5>Simon Watts</h5>
                  <p>Sports Broadcaster & Documentary Maker.</p>
                  <p>Produced "Out of Contract" for Sky Sport.</p>
                  <img src="/sky.png" alt='' className={styles.workreel} />
                </Card>
                </a>
              </div>
              <div>
                <a href='https://www.qreating.io/coach-profile-page?user_id=jill-lupupa' target='_blank'>
                <Card className={styles.StaffCard}>
                  <FaDesktop className={styles.iconStaff} />
                  <img src="/kenzie.png" alt='' className={styles.staffImage} />
                  <h5>Mackenzie Munro</h5>
                  <p>Director, Writer, Producer</p>
                  <p>Currently finishing post-production on the Rom Com </p>
                  <img src="/cannes.png" alt='' className={styles.workreel} />
                </Card>
                </a>
              </div>
              <div>
                <a href='https://www.qreating.io/discover-coaches?' target="_blank" rel="noopener noreferrer">
                <Card className={styles.StaffCard}>
                  <img src="/users.png" alt='' className={styles.staffImage} />
                  <h5>VIEW ALL </h5>
                  <p></p>
                </Card>
                </a>

                
              </div>
       
              
            </Slider>
            {/* <br/>
            <br/>
            <div className="marquee">
        <img src="lala.png" alt="Logo 1"/>
        <img src="lala.png" alt="Logo 2"/>
        <img src="lala.png" alt="Logo 3"/>
        <img src="logo4.png" alt="Logo 4"/>
        <img src="logo5.png" alt="Logo 5"/>
        <img src="logo6.png" alt="Logo 6"/>
        <img src="logo7.png" alt="Logo 7"/>
        <img src="logo8.png" alt="Logo 8"/>
    </div> */}
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
              <Col xs={12} sm={4}>
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
              <Col xs={12} sm={4}>
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
              <Col xs={12} sm={4}>
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
                  <h5>Shape the future of creativity</h5>
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
            <Accordion defaultActiveKey="">
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

        <section className={styles.footer}>
          <Container>
            <Row>
              <Col className={styles.mobileCenter} xs={12} sm={6}>
                <img className={`${styles.logo}`} src="/white.png" />
                <p style={{ color: "white" }} >Unlocking Creativity, One Door At A Time</p>
              </Col>
              <Col className={styles.mobileCenter} xs={12} sm={6} style={{ textAlign: "right" }}>
                <Link href="https://twitter.com/qreating"><FaTwitter className={styles.footerSocialIcons} /></Link>
                <Link href="https://www.instagram.com/qreatingio/?igshid=ZDdkNTZiNTM%3D"><FaInstagram className={styles.footerSocialIcons} /></Link>
                <Link href="https://www.linkedin.com/company/qreating/"><FaLinkedinIn className={styles.footerSocialIcons} /></Link>
                <Link href="https://www.youtube.com/watch?v=7PJ5QP30_n0"><FaYoutube className={styles.footerSocialIcons} /></Link>
              </Col>
            </Row>
            <br />
            <br />
            <hr style={{ color: "white" }} />
            <br />
            <Row>
              <Col className={styles.mobileCenter} xs={12} sm={6}>
                <p style={{ color: 'white' }}>Copyright ©2023 Qreating.io</p>
              </Col>
              <Col className={styles.mobileCenter} xs={12} sm={6} style={{ textAlign: "right" }}>
                <Link className='footer-links' href="https://qreating.notion.site/Blog-a4692fdb359b488ea01a13586c9d2a63?pvs=4">Blog</Link>
                <Link className='footer-links' href="https://qreating.notion.site/qreating/Qreating-s-Privacy-Policy-d386366d727644c1a1a1a51953010167">Privacy</Link>
                <Link className='footer-links' href="https://qreating.notion.site/Qreating-s-Terms-of-Service-70618bcf331e43539db4256cf73b6ee4">Terms</Link>
              </Col>
            </Row>
          </Container>
        </section>

      </main>
    </>
  )
}
