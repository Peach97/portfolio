import NextLink from "next/link";
import { Link } from "@mui/material";

const LinkItem = ({ href, path, target, children, ...props }) => {
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link target={target} {...props}>
        {children}
      </Link>
    </NextLink>
  );
};
export default LinkItem;
