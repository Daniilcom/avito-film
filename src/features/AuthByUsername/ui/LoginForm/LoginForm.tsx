import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState'
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername'
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice'
import { useCallback, memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
  onSuccess: () => void
}

export const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const dispatch = useAppDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value))
    },
    [dispatch]
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value))
    },
    [dispatch]
  )

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }))
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess()
      dispatch(loginActions.setUsername(''))
      dispatch(loginActions.setPassword(''))
    }
  }, [dispatch, username, password, onSuccess])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title="Форма авторизации" />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        onChange={onChangeUsername}
        type="text"
        className={cls.input}
        placeholder="name"
        value={username}
      />
      <Input
        onChange={onChangePassword}
        type="text"
        className={cls.input}
        placeholder="password"
        value={password}
      />
      <Button
        className={cls.loginBtn}
        theme={ButtonTheme.OUTLINE}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        Войти
      </Button>
    </div>
  )
})
