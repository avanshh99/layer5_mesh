import React from "react";
import { Container } from "../../../reusecore/Layout";
import { HandbookWrapper } from "./Handbook.style";
import TOC from "../../../components/handbook-navigation/index";
import { ReactComponent as TwitterIcon } from "../../../assets/images/socialIcons/twitter.svg";
import mail_icon from "../../../assets/images/socialIcons/mail_keppel.svg";
import youtube_icon from "../../../assets/images/socialIcons/youtube-light.svg";
import github_icon from "../../../assets/images/socialIcons/github-light.svg";
import linkedin_icon from "../../../assets/images/socialIcons/linkedin-light.svg";
import docker_icon from "../../../assets/images/socialIcons/docker-light.svg";
import slack_icon from "../../../assets/images/socialIcons/slack-light.svg";
import TocPagination from "../../../components/handbook-navigation/TocPagination";
import IntraPage from "../../../components/handbook-navigation/intra-page";

const contents = [
  {
    id: 0,
    link: "#Newsletter",
    text: "Newsletter",
  },
  { id: 1, link: "#Mailing Lists", text: "Mailing Lists" },
  { id: 2, link: "#Calendar", text: "Calendar" },
  { id: 3, link: "#Slack Community", text: "Slack Community" },
  { id: 4, link: "#Discussion Forum", text: "Discussion Forum" },
  { id: 5, link: "#Social Media", text: "Social Media" },
];

const Connect = () => {
  return (
    <HandbookWrapper>
      <div className="page-header-section">
        <h1>Connect with Us</h1>
      </div>
      <TOC />
      <div className="page-section">
        <Container>
          <div className="content">
            <a id="Newsletter">
              {" "}
              <h2>Subscribe to Newsletter</h2>{" "}
            </a>
            <p>
              Don’t miss out on anything, sign up to receive updates on our
              newest releases, latest blog posts and any relevant information.
            </p>
            <ul>
              <li>
                <a href="https://meshery.io/subscribe">Meshery mailing list</a>
              </li>
              <li>
                <a href="https://layer5.io/subscribe">
                  Layer5 mailing list
                </a>
              </li>
              <li>
                <a href="https://smp-spec.io/subscribe">
                  Cloud Native Performance mailing list
                </a>
              </li>
            </ul>
            <a id="Mailing Lists">
              {" "}
              <h2>Mailing Lists</h2>{" "}
            </a>
            <ul>
              <li>
                <a href="mailto:maintainers@layer5.io">Layer5 Maintainers</a>
              </li>
              <li>
                <a href="mailto:discuss-moderators@layer5.io">
                  Discussion Forum Moderators
                </a>
              </li>
              <li>
                <a href="mailto:dev-group@meshery.io">Meshery Developers</a>
              </li>
              <li>
                <a href="mailto:user-group@meshery.io">Meshery Users</a>
              </li>
              <li>
                <a href="http://meshery-dev@meshery.dev">
                  Meshery Contributors
                </a>
              </li>
              <li>
                <a href="mailto:maintainers@meshery.io">Meshery Maintainers</a>
              </li>
              <li>
                <a href="http://meshery-security-vulns-reports@meshery.dev">
                  Meshery Security and Vulnerability Reports
                </a>
              </li>
              <li>
                <a href="mailto:community@meshery.io">Meshery Community</a>
              </li>
              <li>
                <a href="https://groups.google.com/a/getnighthawk.dev/g/developers">
                  Nighthawk Developers
                </a>
              </li>
              <li>
                <a href="https://groups.google.com/u/2/a/getnighthawk.dev/g/maintainers">
                  Nighthawk Maintainers
                </a>
              </li>
              <li>
                <a href="https://groups.google.com/a/getnighthawk.dev/g/users">
                  Nighthawk Users
                </a>
              </li>
              <li>
                <a href="mailto:community@smp-spec.io">
                  Cloud Native Performance Community
                </a>
              </li>
              <li>
                <a href="mailto:maintainers@smp-spec.io">
                  Cloud Native Performance Maintainers
                </a>
              </li>
              <li>
                <a href="mailto:user-group@smp-spec.io">
                  Cloud Native Performance Users
                </a>
              </li>
              <li>
                <a href="mailto:community-managers@layer5.io">
                  Layer5 Community Managers
                </a>
              </li>
            </ul>
            <a id="Calendar">
              {" "}
              <h2>Calendar</h2>{" "}
            </a>
            <p>
              Don’t miss out on any of the activities in the community. Join any
              or all of the weekly meetings subscribing to the{" "}
              <a href="https://layer5.io/community/calendar#meetings">
                community calendar .
              </a>
            </p>{" "}
            <a id="Slack Community">
              {" "}
              <h2>Slack Community</h2>{" "}
            </a>
            <p>
              We are a community of like-minded people with thousands of
              members.
            </p>
            <p>
              Join our <a href="https://slack.layer5.io/">Slack Workspace</a>{" "}
              introduce yourself and interact with the community. There are
              different channels in the workspace to engage within.
            </p>
            <div className="channels-list">
              <p>
                <a href="https://layer5io.slack.com/archives/CDM0ACDM5">
                  #general
                </a>{" "}
                - For workspace-wide communication and announcements.
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/CFGG6U10E">
                  #meshery
                </a>{" "}
                - For discussion on topics in and around Meshery.
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/C017NA80S66">
                  #meshery-adapters
                </a>{" "}
                - Discuss topics related to meshery-adapters.
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/C011VPREG2Z">
                  #meshery-ci
                </a>{" "}
                - For discussion on topics related to Meshery Build, Release, Workflows, DevOps.
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/C010LFFGFFA">
                  #meshery-meshsync
                </a>{" "}
                - For discussions on issues related to MeshSync.
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/C0130BQ4L3T">
                  #mesheryctl
                </a>{" "}
                - For discussions on Meshery’s CLI
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/C019426UBNY">
                  #newcomers
                </a>{" "}
                - For welcoming first-time contributors and community newcomers.
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/CVBGPTFJN">
                  #performance
                </a>{" "}
                - For discussions related to measuring and evaluating cloud native performance.
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/C012UMS2MCM">
                  #wasm
                </a>{" "}
                - For discussions on webassembly, rust, envoy filters.
              </p>
              <p>
                <a href="https://layer5io.slack.com/archives/C015QJKUMPU">
                  #websites
                </a>{" "}
                - For discussions related to the UI/UX of{" "}
                <a href="http://layer5.io/">Layer 5</a> project sites.
              </p>
            </div>
            <a id="Discussion Forum">
              {" "}
              <h2>Discussion Forum</h2>{" "}
            </a>
            <p>
              Join us on our cloud native community's{" "}
              <a href="https://discuss.layer5.io">Discussion Forum</a>
            </p>
            <div className="channels-list">
              <ul>
                <li><a href="https://discuss.layer5.io/c/community/12">Community Topic</a></li>
              </ul>
            </div>
            <a id="Social Media">
              {" "}
              <h2>Social Media</h2>{" "}
            </a>
            <p>
              Layer5 is dedicated to empowering engineers and supporting the
              open source community that create them. Learn more about Layer5
              and connect with the community by following and engaging with us
              on our social media accounts.
            </p>
            <div>
              <p className="channels-para">
                <TwitterIcon className="twitter" />
                &nbsp;&nbsp;
                <a href="https://twitter.com/layer5">@layer5</a>,&nbsp;
                <a href="https://twitter.com/mesheryio">@mesheryio</a>
                &nbsp;and&nbsp;
                <a href="https://twitter.com/smp_spec">@smp_spec</a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={mail_icon} alt="mail" />
                &nbsp;&nbsp;
                <a href="mailto:community-managers@layer5.io">
                  Connect with our community managers for any inquiries or
                  support!
                </a>
              </p>
              <p className="channels-para">
                <img
                  className="channels-img"
                  src={youtube_icon}
                  alt="youtube"
                />
                &nbsp;&nbsp;
                <a href="https://www.youtube.com/c/Layer5io?sub_confirmation=1">
                  Subscribe on Youtube
                </a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={github_icon} alt="github" />
                &nbsp;&nbsp;
                <a href="https://github.com/layer5io">
                  Discover our projects on GitHub
                </a>
              </p>
              <p className="channels-para">
                <img
                  className="channels-img"
                  src={linkedin_icon}
                  alt="linkedin"
                />
                &nbsp;&nbsp;
                <a href="https://www.linkedin.com/company/layer5">
                  Join our professional network on LinkedIn
                </a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={docker_icon} alt="docker" />
                &nbsp;&nbsp;
                <a href="https://hub.docker.com/u/layer5/">
                  Take control with Docker deployment
                </a>
              </p>
              <p className="channels-para">
                <img className="channels-img" src={slack_icon} alt="slack" />
                &nbsp;&nbsp;
                <a href="https://slack.layer5.io/">
                  Communicate and collaborate with us on Slack
                </a>
              </p>
            </div>
          </div>
          <TocPagination />
        </Container>

        <IntraPage contents={contents} />
      </div>
    </HandbookWrapper>
  );
};

export default Connect;
