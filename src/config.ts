export const landing = {
  banner: {
    text: "Hardhat 3 is now production ready. Migrate now",
    href: "/docs",
  },
  header: {
    logo: {
      url: "/",
      lightSrc: "/images/hardhat-logo.svg",
      darkSrc: "/images/hardhat-logo-dark.svg",
      alt: "Hardhat",
    },
    menu: [
      { label: "home", url: "/" },
      { label: "documentation", url: "/docs/getting-started" },
      { label: "plugins", url: "/plugins" },
      { label: "hardhat 2", url: "/hardhat2" },
    ],
    socials: [
      { name: "github", url: "https://github.com/NomicFoundation/hardhat" },
      { name: "x", url: "https://twitter.com/HardhatHQ" },
      { name: "discord", url: "https://hardhat.org/discord" },
    ],
  },
  hardhatNews: {
    title: "From the Hardhat blog",
  },
  whatIsNew: {
    title: "What's new in Hardhat",
  },
  emailForm: {
    title: "Tell me about new product features as they come out",
  },
  footer: {
    builtByText: "Built by",
    copyrightText: "Nomic Foundation",
    privacyPolicyText: "Privacy Policy",
    privacyPolicyUrl: "/privacy-policy.html",
  },
};

export const cookiePopup = {
  title: "Cookie Policy",
  text: "We use cookies to improve your experience on our website.",
  readMoreHref: "/privacy-policy.html",
  readMoreText: "Read More",
  measurementId: process.env.GA_MEASUREMENT_ID,
} as const;
