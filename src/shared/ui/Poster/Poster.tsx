import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Poster.module.scss';
import { AppImage } from '../AppImage';

interface PosterProps {
  className?: string
  src?: string
  width?: number
  height?: number
  alt?: string
}

export const Poster = ({
    className, src, width, height, alt,
}: PosterProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width,
            height,
        }),
        [width, height],
    );

    // const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    return (
        <AppImage
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Poster, mods, [className])}
        />
    );
};
