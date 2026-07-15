import type { ComponentType } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { SOCIALS, type SocialId } from "@/lib/contact";

export const SOCIAL_ICONS: Record<SocialId, ComponentType<{ size?: number }>> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
};

type SocialLinksProps = {
  ids?: SocialId[];
  linkClassName?: string;
  iconSize?: number;
};

export default function SocialLinks({ ids, linkClassName, iconSize = 16 }: SocialLinksProps) {
  const items = ids ? SOCIALS.filter((s) => ids.includes(s.id)) : SOCIALS;
  return (
    <>
      {items.map(({ id, label, url }) => {
        const Icon = SOCIAL_ICONS[id];
        return (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`More Than Points on ${label}`}
            className={linkClassName}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </>
  );
}
