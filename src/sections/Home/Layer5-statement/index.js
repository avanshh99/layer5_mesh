import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import SectionTitle from "../../../reusecore/SectionTitle";
import Button from "../../../reusecore/Button";
import svgBackground from "../../../assets/images/homePage-images/background.svg";
import BannerSectionWrapper from "./statement.style";
import { StaticImage } from "gatsby-plugin-image";

const imgHero = "../../../assets/images/kanvas/KanvasDesigner.webp";
// const imgHero = "../service-mesh-management/images/service-mesh.svg";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <div className="section">
        <Row className="row">
          <Col $sm={12} $md={6} $lg={6} className="left-col">
            <div className="left">
              <div className="left-child">
                <div className="svg-background">
                  <img src={svgBackground} alt="background" />
                </div>
                <SectionTitle
                  className="section-title"
                  $leftAlign={true}
                  $UniWidth="100%"
                >
                  <h4 className="statement">We make cloud native manageable by </h4>
                  {/* <h4 className="statement">We make cloud native manageable by </h4> */}
                  <h2 className="statement">
                    <span>
                      harnessing the unique position Kubernetes has in changing how developers write applications and how operators run modern infrastructure.
                    </span>
                  </h2>
                  {/* <img className="Layer5Logo" src={Layer5Logo} /> */}
                  <h3 className="statement">
                    {/* Enablers of Engineers. Enablers of Speed. Enablers of Business. */}
                    Layer5 is an empowerer of the developer, the operator, and the service owner
                  </h3>
                  <div className="join-community">
                    <Button $primary className="join-community-button" title="our projects" $url="/projects" />
                  </div>
                </SectionTitle>
              </div>
            </div>
          </Col>
          <Col $sm={12} $md={6} $lg={6} className="right-col">
            <StaticImage className="hero" src={imgHero} alt="Layer5 Kanvascreenshot" loading="lazy" />
          </Col>
        </Row>
      </div>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
