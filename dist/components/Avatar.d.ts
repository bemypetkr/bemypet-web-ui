export declare type AvatarProps = {
    /**
     * Image source url
     *
     * @type {string}
     */
    src?: string;
    /**
     * Avatar width and height
     * Default is 96px
     *
     * @type {number}
     */
    size?: number;
};
export declare const Avatar: import("styled-components").StyledComponent<({ size, src, ...rest }: AvatarProps) => JSX.Element, any, {}, never>;
