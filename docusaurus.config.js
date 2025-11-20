// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const baseUrl = '/';
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// remove the old footer_col_3 import since we'll inline everything
// const foot = require('./static/footer_col_3');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'User Manual',
  tagline: 'Guide to navigating Forest Stack platform features, roles, and support resources.',
  url: 'https://docs.forestdx.iudx.io/',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/forest_logo.svg',
  organizationName: 'ForestDx', // Usually your GitHub org/user name.
  projectName: 'Forest Stack', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/datakaveri/forest-stack-developer-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideOnScroll: true,

      // Announcement bar as the “Connect / CTA” banner
      announcementBar: {
        id: 'department_header',
        content: 'FOREST DEPARTMENT OF RAJASTHAN',
        backgroundColor: '#1f2937',
        textColor: '#FFFFFF',
        isCloseable: false,
      },

      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Forest_Stack.png',
          href: 'https://forest-stack.digivan.forest.rajasthan.gov.in/',
          target: '_blank',
        },
        items: [],
      },



      footer: {
        style: 'light',
        links: [
          // 1st column: logo + description + social icons
          {
            items: [
              {
                html: `
  <div class="footer__brand">
    <a href="https://uat.catalogue.forestdx.iudx.io/" target="_blank" rel="noopener">
      <img
        src="${baseUrl}img/tgdex-green.png"
        alt="Forest Stack Logo"
        style="height:40px; margin-bottom:1px;"
      />
    </a>
    <p class="footer__text">
        Forest Stack is a digital ecosystem, combining data, technology & governance to enhance forest cover, biodiversity conservation, enhance community involvement and unlock further innovation by startups, academia & conservationists. It is designed to bring a holistic view across multiple forest-related verticals and enable rapid digital interventions in the forestry space.    </p>
    <h5 class="footer__social-heading">Social Media</h5>
    <div class="footer__social-icons">
      <a href="https://www.facebook.com/forestdepartmentrajasthan" target="_blank" rel="noopener">
        <img src="${baseUrl}img/meta.svg" alt="Meta" />
      </a>
      <a href="https://x.com/ForestRajasthan" target="_blank" rel="noopener">
        <img src="${baseUrl}img/x.svg" alt="X" />
      </a>
      <a href="https://www.instagram.com/rajasthanforestdepartment/" target="_blank" rel="noopener">
        <img src="${baseUrl}img/instagram.svg" alt="Instagram" />
      </a>
    </div>
  </div>`,
              },
            ],
          },

          // 2nd column: “TGDeX”
          {
            title: 'Forest Stack',
            items: [
              { label: 'Home', to: 'https://forest-stack.digivan.forest.rajasthan.gov.in/' },
              { label: 'About Forest Stack', to: 'https://forest-stack.digivan.forest.rajasthan.gov.in/about-us' },
              { label: 'Contact Us', to: 'https://helpdesk.forest-stack.digivan.forest.rajasthan.gov.in/' },
            ],
          },

          // 3rd column: “Platform Features”
          {
            title: 'Platform Features',
            items: [
              { label: 'Data Sets', to: 'https://forest-stack.digivan.forest.rajasthan.gov.in/datasets' },
              { label: 'Models', to: 'https://forest-stack.digivan.forest.rajasthan.gov.in/models' },
              { label: 'Usecases', to: 'https://forest-stack.digivan.forest.rajasthan.gov.in/usecases' },
              { label: 'Challenges', to: 'https://forest-stack.digivan.forest.rajasthan.gov.in/innovations' },
            ],
          },

          // 4th column: “Help & Support”
          {
            title: 'Help & Support',
            items: [
              { label: 'Help & Support', to: 'https://helpdesk.forest-stack.digivan.forest.rajasthan.gov.in/' },
              { label: 'FAQs', to: 'https://forest-stack.digivan.forest.rajasthan.gov.in/faq' },
              { label: 'User Manual', to: '/' },
            ],
          },
        ],
        copyright: `
    <hr style="width:100%; margin:2rem 0; border:none; border-top:1px solid #ddd;" />
<footer>
  <!-- Flex row: Powered By + Privacy/Terms -->
  <div class="footer__bottom-content">
    <div class="footer__powered-by">
      <span>Powered By:</span>
      <img src="${baseUrl}img/emerging-tech.svg"
           alt="Emerging Technologies Logo"
           style="height:45px;" />
    </div>

    <div class="footer__privacy-terms">
      <a href="https://forest-stack.digivan.forest.rajasthan.gov.in/privacy-policy"
         target="_blank"
         rel="noopener">
        Privacy Policy
      </a>
      <span>|</span>
      <a href="https://forest-stack.digivan.forest.rajasthan.gov.in/terms-of-service"
         target="_blank"
         rel="noopener">
        Terms of Service
      </a>
    </div>
  </div>

  <!-- Full-width © strip -->
  <div class="full-width-cta">
    &copy; Government of Rajasthan
  </div>
</footer>

  `,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

      stylesheets: [
        // ensure your custom footer CSS is loaded
        '${baseUrl}css/footer.css',
      ],
    }),
};

module.exports = config;