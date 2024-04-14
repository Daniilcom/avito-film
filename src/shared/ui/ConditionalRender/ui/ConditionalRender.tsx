import { ComponentType, ReactElement, ReactNode } from 'react';

interface ConditionalRenderProps {
  data: any
  Placeholder?: ReactElement
  Text?: ReactElement
  children: ReactNode
  visible?: boolean
}

export const ConditionalRender = (props: ConditionalRenderProps) => {
    const {
        data, Placeholder, Text, children, visible = true,
    } = props;
    function isValidData(data: any): boolean {
        return (
            data !== null
      && data !== 'null'
      && data !== undefined
      && data !== 'undefined'
      && data !== ''
      && !(Array.isArray(data) && data.length === 0)
        );
    }

    if (!isValidData(data) || !visible) {
        if (!visible) {
            return null;
        }
        if (Placeholder) {
            return Placeholder;
        }
        if (Text) {
            return Text;
        }
        return null;
    }

    return <>{children}</>;
};
