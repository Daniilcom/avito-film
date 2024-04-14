import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Placeholder.module.scss';

interface PlaceholderProps {
  className?: string
  text: string
}

export const Placeholder = (props: PlaceholderProps) => {
    const { className, text } = props;
    return (
        <div className={classNames(cls.Placeholder, {}, [className])}>
            <p>{text}</p>
        </div>
    );
};
