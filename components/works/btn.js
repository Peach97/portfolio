import NextLink from "next/link";
import { Link } from "@mui/material";

const LinkItem = ({ href, path, target, children, ...props }) => {
  // const active = path === href;
  // const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link target={target} {...props}>
        {children}
      </Link>
    </NextLink>
  );
};
export default LinkItem;
