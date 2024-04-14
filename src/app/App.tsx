import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgetes/NavBar';
import { useTheme } from 'app/providers/ThemeProvaider';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavBar />
            <div className="content-page">
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
