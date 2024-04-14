import { StateSchema } from 'app/providers/StoreProvaider';

export const getLoginState = (state: StateSchema) => state?.loginForm;
