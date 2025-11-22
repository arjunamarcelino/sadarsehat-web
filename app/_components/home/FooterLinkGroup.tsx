import Link from "next/link";

export function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-heading text-dark text-sm font-semibold sm:text-sm lg:text-base">{title}</p>
      <ul className="text-dark-medium-dark flex flex-col gap-2 text-xs sm:text-xs lg:text-sm">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="transition-colors duration-350 hover:text-black">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
