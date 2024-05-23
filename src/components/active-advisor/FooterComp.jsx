import React from "react";
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";



function FooterComp() {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 "></section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  ACTIVE ADVISOR
                </h6>
                <p>
                  We are a group of passionate developers and designers who have
                  come together to create this platform. We are here to bring
                  communities together to help people to socialize with the help
                  of power of sports!
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  POPULAR COMMUNITIES
                </h6>
                <p>
                  <a href="/property/9" className="text-reset">
                    The Football Hub
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    The Golf Club
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Antalya SUP Club
                  </a>
                </p>
                <p>
                  <a href="/details/16" className="text-reset">
                    Peak Pursuit Hikers
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="/Communities" className="text-reset">
                    Communities
                  </a>
                </p>
                <p>
                  <a href="/Communities" className="text-reset">
                    Sports Fields
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Make a Reservation
                  </a>
                </p>
                <p>
                  <a href="/Contact" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <div className="footerContact">
                  <PlaceIcon />
                  <p>Antalya, TR</p>
                </div>
                <div className="footerContact">
                  <MailIcon />
                  <p>activeadvisor@hotmail.com</p>
                </div>
                <div className="footerContact">
                  <PhoneIcon />
                  <p>+ 905678912345</p>
                </div>
                <div className="footerContact">
                  <PhoneIcon />

                  <p>+ 905678912347</p>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className="footerLinks">
          <div>
            <a
              target="blank-page"
              href="https://tr-tr.facebook.com/reg/"
              className="me-4 text-reset"
            >
              <FacebookIcon />
            </a>
            <a
              target="blank-page"
              href="https://twitter.com/i/flow/login"
              className="me-4 text-reset"
            >
              <TwitterIcon />
            </a>
            <a
              target="blank-page"
              href="https://www.instagram.com/"
              className="me-4 text-reset"
            >
              <InstagramIcon />
            </a>
            <a
              target="blank-page"
              href="https://tr.linkedin.com/"
              className="me-4 text-reset"
            >
              <LinkedInIcon />
            </a>
            <a
              target="blank-page"
              href="https://www.youtube.com/"
              className="me-4 text-reset"
            >
              <YouTubeIcon />
            </a>
          </div>
        </div>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright
        </div>
      </MDBFooter>
    </>
  );
}

export default FooterComp;

