import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer (){
    return<>

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
    </>
}

export default Footer