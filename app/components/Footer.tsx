import NavigationItem from "~/components/ui/NavItem";
import SocialItem from "~/components/ui/SocialItem";
import { TSocialItems } from "~/components/types";

export default function Footer() {
  const socialItems: TSocialItems[] = [
    {
      title: "GitHub",
      socialIcon: "FiGithub",
      id: 1,
      className: "w-full",
      to: "https://github.com/kpoziomek",
    },
    {
      title: "LinkedIn",
      socialIcon: "FiLinkedin",
      id: 2,
      className: "w-[85%] md:w-full xl:w-[85%]",
      to: "https://www.linkedin.com/in/krzysztof-poziomek-501a45b4/",
    },
    {
      title: "Twitter",
      socialIcon: "FiTwitter",
      id: 3,
      className: "w-[70%] md:w-full xl:w-[70%]",
      to: "https://x.com/K_Poziomek",
    },
  ];

  const navigationItems = [
    {
      element: (
        <NavigationItem to="#work" title="Works" type={"desktop"} size="md" />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem to="#tools" title="Tools" type={"desktop"} size="md" />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem
          to="#skills"
          title="Skills"
          type={"desktop"}
          size="md"
        />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem
          to="#testimonials"
          title="Testimonials"
          type={"desktop"}
          size="md"
        />
      ),
      id: crypto.randomUUID(),
    },

    {
      element: (
        <NavigationItem to="#blog" title="Blogs" type={"desktop"} size="md" />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem title="About" to="#about" type={"desktop"} size="md" />
      ),
      id: crypto.randomUUID(),
    },
  ];

  const projectItems = [
    {
      element: (
        <NavigationItem
          to="#work"
          title="App projekt"
          type={"desktop"}
          size="md"
        />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem
          to="#work"
          title="App projekt 2"
          type={"desktop"}
          size="md"
        />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem
          to="#work"
          title="Desktop Pojekt"
          type={"desktop"}
          size="md"
        />
      ),
      id: crypto.randomUUID(),
    },
    {
      element: (
        <NavigationItem
          to="#work"
          title="Desktop Projekt 2"
          type={"desktop"}
          size="md"
        />
      ),
      id: crypto.randomUUID(),
    },
  ];

  return (
    <footer className="bg-SecondaryBackgroundColor w-full px-4 py-20 rounded-tl-3xl rounded-tr-3xl">
      <div className="flex flex-col md:flex-row md :gap-10 md:px-10">
        <div className="px-4 md:px-10 md:grow">
          <p className="largeParagraph pb-8">Follow me on other channels</p>
          <div className="flex flex-col gap-2.5 pb-10 md:pb-0">
            {socialItems.map((item) => (
              <SocialItem
                key={item.id}
                title={item.title}
                to={item.to}
                socialIcon={item.socialIcon}
                className={item.className}
              />
            ))}
          </div>
        </div>
        <div className="border border-b-0 w-full md:h-fill md:w-0 border-black " />
        <div className="px-4 flex flex-col gap-10 pt-10 md:flex-row md:pt-0 md:grow md:pl-10">
          <div className="flex flex-col gap-6 grow">
            <p className="largeParagraph"> Navigation</p>
            <ul className="flex flex-col gap-3">
              {navigationItems.map((item) => (
                <li key={item.id}>{item.element}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6 grow">
            <h3 className="largeParagraph">Case studies</h3>
            <ul className="flex flex-col gap-3">
              {projectItems.map((item) => (
                <li key={item.id}>{item.element}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-10">&copy; 2024 Poziom Hand. All rights reserved.</div>
    </footer>
  );
}
