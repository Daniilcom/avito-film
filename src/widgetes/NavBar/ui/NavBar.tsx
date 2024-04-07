import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgetes/ThemeSwitcher';
import cls from './NavBar.module.scss';

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <ThemeSwitcher />
        <div className={cls.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
                className={cls.mainLink}
            >
                Главная
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/random">
                Рандомный фильм
            </AppLink>
        </div>
    </div>
);
