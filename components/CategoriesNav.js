import css from "./CategoriesNav.scss";
import { useRouter } from "next/router";

const CategoriesNav = props => {
  return (
    <nav className={css.CategoriesNav}>
      <ActiveLink href="/feed?category=husky">husky</ActiveLink>
      <ActiveLink href="/feed?category=hound">hound</ActiveLink>
      <ActiveLink href="/feed?category=pug">pug</ActiveLink>
      <ActiveLink href="/feed?category=labrador">labrador</ActiveLink>
    </nav>
  );

  function ActiveLink({ children, href }) {
    // Adapted from https://nextjs.org/docs#userouter
    const router = useRouter();
    const className = router.asPath === href ? css.LinkActive : "";

    const handleClick = e => {
      e.preventDefault();
      router.push(href);
    };

    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }
};

export default CategoriesNav;
