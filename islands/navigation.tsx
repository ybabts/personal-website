import { useState } from "preact/hooks";

type NavigationProps = {
  sidebar?: boolean;
};

export default function Navigation(props: NavigationProps) {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <nav class="bg-complimentary-light-blue
      fixed w-vfull h-navbar
      flex align-middle content-center
      pl-3 pr-3">
        <a href="/" class="flex align-middle content-center">
          <div class="flex align-middle content-center">
            <img
              src="/logo.svg"
              alt="Logo"
              class="h-full p-2 m-[0.1rem]"
            />
            <div class="h-fit pl-2 pr-2
              leading-navbar font-sans text-2xl">
              ByteMason
            </div>
          </div>
        </a>
        <div class="flex flex-grow justify-end">
          <PageLink href="/">Home</PageLink>
          <PageLink href="/about">About</PageLink>
          <PageLink href="/contact">Contact</PageLink>
        </div>
        <img
          src="/hamburger.svg"
          alt="Menu"
          class="h-full p-2 m-[0.4rem]"
          onClick={() => {
            console.log(true);
            setSidebar(true);
          }}
        />
      </nav>

      {
        /* <div
        class={`
        fixed w-vfull h-vfull flex justify-end
        `}
      >
        <div
          class={`
          bg-secondary flex-grow
          transition-all duration-500 ease-in-out ${
            sidebar ? "w-full" : "w-vhalf"
          }

          `}
          onClick={() => {
            setSidebar(false);
          }}
        />
        <nav
          class={`
          bg-primary-deep-blue flex-grow
          transition-all duration-500 ease-in-out


          `}
          onMouseLeave={() => {
            setSidebar(false);
          }}
        >
        </nav>
      </div> */
      }

      <div class="w-full h-navbar" />
    </>
  );
}

type PageLinkProps = {
  href: string;
  children: string;
};

function PageLink(props: PageLinkProps) {
  return (
    <>
      <div class="pl-2 pr-2 flex flex-col justify-center">
        <div class="h-fit ">
          <a href={props.href} class="pl-3 pr-3">
            {props.children}
          </a>
        </div>
      </div>
    </>
  );
}
