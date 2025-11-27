// @ts-check
const baseUrl = "/";
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "User Manual",
  tagline: "Guide to navigating Forest Stack platform features.",
  url: "https://docs.forestdx.iudx.io/",
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "assets/new-forest/catalogue/forest_logo.svg",
  organizationName: "ForestDx",
  projectName: "Forest Stack",

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "Forest Stack Logo",
          src: "img/Forest_Stack.png",
          href: "https://forest-stack.digivan.forest.rajasthan.gov.in/",
          target: "_blank",
        },
        items: [],
      },
      footer: {
        style: "light",
        links: [
          // 1. Contact Info
          {
            title: "Forest Stack | Rajasthan",
            items: [
              {
                html: `
                  <div class="footer__contact-info">
                    <div class="contact-row">
                      <img src="${baseUrl}img/location.svg" alt="Loc" />
                      <a 
                      href="https://maps.app.goo.gl/Esbv8jMrY1ZkQLbn7" 
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <span>Aranya Bhawan, Mahatma Gandhi Rd, Jhalana Institutional Area, Jaipur, Rajasthan 302004</span>
                    </a>
                      </div>
                    <div class="contact-row">
                      <img src="${baseUrl}img/global.svg" alt="Web" />
                      <a href="https://forest.rajasthan.gov.in/" target="_blank">forest.rajasthan.gov.in</a>
                    </div>
                    <div class="contact-row">
                      <img src="${baseUrl}img/sms.svg" alt="Mail" />
                      <a href="mailto:dcfta.it.forest@rajasthan.gov.in">dcfta.it.forest@rajasthan.gov.in</a>
                    </div>
                  </div>`,
              },
            ],
          },
          // 2. Important Links (Routing to Main Platform)
          {
            title: "Important links",
            items: [
              {
                label: "Forest Stack Home",
                to: "https://forest-stack.digivan.forest.rajasthan.gov.in/",
              },
              {
                label: "About Us",
                to: "https://forest-stack.digivan.forest.rajasthan.gov.in/about-us",
              },
              {
                label: "Datasets",
                to: "https://forest-stack.digivan.forest.rajasthan.gov.in/datasets",
              },
              {
                label: "Models",
                to: "https://forest-stack.digivan.forest.rajasthan.gov.in/models",
              },
              {
                label: "Use Cases",
                to: "https://forest-stack.digivan.forest.rajasthan.gov.in/usecases",
              },
              {
                label: "Challenges",
                to: "https://forest-stack.digivan.forest.rajasthan.gov.in/innovations",
              },
            ],
          },
          // 3. Documentation (Split Headers)
          {
            title: " ",
            items: [
              {
                html: `
                  <div class="doc-group">
                    <span class="doc-group-title">Control Plane Documentation</span>
                    <a href="https://staging.controlplane.forestdx.iudx.io/apis" target="_blank" class="doc-link">Catalogue AAA API Docs</a>
                  </div>
                  <div class="doc-group">
                    <span class="doc-group-title">Data Plane Documentation</span>
                    <a href="https://staging.rs.forestdx.iudx.io/apis" target="_blank" class="doc-link">Resource Server API Docs</a>
                    <a href="https://staging.file.forestdx.iudx.io/apis" target="_blank" class="doc-link">File Server API Docs</a>
                    <a href="https://staging.ogc-s3.forestdx.iudx.io/api" target="_blank" class="doc-link">OGC Server API Docs</a>
                    <a href="https://staging.rs.forestdx.iudx.io/rsp/apis" target="_blank" class="doc-link">Gateway Server API Docs</a>
                    <a href="https://voc.forest-stack.iudx.io/" target="_blank" class="doc-link">Vocabulary Docs</a>
                  </div>`,
              },
            ],
          },
          // 4. Help (Internal Docs Routing)
          {
            title: "Help & Support",
            items: [
              {
                label: "Help & Support",
                to: "https://helpdesk.forest-stack.digivan.forest.rajasthan.gov.in/",
              },
              {
                label: "FAQs",
                to: "https://forest-stack.digivan.forest.rajasthan.gov.in/faq",
              },
              { label: "User Manual", to: "/" }, // Points to this Docusaurus site root
            ],
          },
          // 5. Partners
          {
            title: "Our Partners",
            items: [
              {
                html: `
                  <div class="footer__partners">
                    <div class="partner-row-1">
                      <img src="${baseUrl}img/iisc-logo-white.svg" class="partner-logo" alt="IISc" />
                      <img src="${baseUrl}img/jica-logo.svg" class="partner-logo" alt="JICA" />
                      <img src="${baseUrl}img/doit-logo.svg" class="partner-logo" alt="DOIT" />
                    </div>
                    <div class="partner-gov">
                      <img src="${baseUrl}img/emblem-logo.svg" class="emblem-logo" alt="Gov" />
                      <div class="gov-text">
                        <span>Government of Rajasthan</span>
                        <span>Forest Department</span>
                      </div>
                    </div>
                  </div>`,
              },
            ],
          },
        ],
        // Bottom Bar
        copyright: `
          <div class="footer__bottom-wrapper">
            <div class="footer__bottom-left">
              <div class="footer__policy-links">
                <a href="https://forest-stack.digivan.forest.rajasthan.gov.in/privacy-policy">Privacy Policy</a>
                <span>|</span>
                <a href="https://forest-stack.digivan.forest.rajasthan.gov.in/terms-of-service">Terms of Service</a>
              </div>
              <div class="footer__copyright">
                © ${new Date().getFullYear()} by Forest Stack
              </div>
            </div>
            <div class="footer__bottom-right">
              <span class="connect-title">Connect with us</span>
              <div class="social-icons">
                <a href="https://x.com/ForestRajasthan" target="_blank"><img src="${baseUrl}img/twitter.svg" alt="X" /></a>
                <a href="https://www.facebook.com/forestdepartmentrajasthan" target="_blank"><img src="${baseUrl}img/facebook.svg" alt="FB" /></a>
                <a href="http://instagram.com/rajasthanforestdepartment" target="_blank"><img src="${baseUrl}img/instagram.svg" alt="Insta" /></a>
              </div>
            </div>
          </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;