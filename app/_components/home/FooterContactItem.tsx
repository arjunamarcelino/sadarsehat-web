import Image from "next/image";

export function FooterContactItem({
  icon,
  alt,
  text,
  href,
}: {
  icon: string;
  alt: string;
  text: string;
  href?: string;
}) {
  const Wrapper = href ? "a" : "span";

  return (
    <div className="flex items-center gap-2">
      <span className="bg-soft-mint flex h-5 w-5 items-center justify-center rounded-full p-[4px] lg:h-6 lg:w-6">
        <Image src={icon} alt={alt} width={16} height={16} className="object-contain lg:w-5 lg:h-5" />
      </span>

      <Wrapper {...(href ? { href } : {})} className={href ? "hover:underline" : ""}>
        {text}
      </Wrapper>
    </div>
  );
}
