import './Link.css';
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string;
    href?: string;
    external?: boolean;
    variant?: 'default' | 'button' | 'tag';
}
declare const Link: import("react").NamedExoticComponent<LinkProps>;
export default Link;
