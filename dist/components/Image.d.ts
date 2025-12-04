import './Image.css';
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    baseUrl?: string;
    lazy?: boolean;
}
declare const Image: import("react").NamedExoticComponent<ImageProps>;
export default Image;
