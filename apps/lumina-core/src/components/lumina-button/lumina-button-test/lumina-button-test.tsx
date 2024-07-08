// Omit<ButtonAsButton, 'as' | 'styleType'>: This is using the Omit utility type in TypeScript.
// It creates a new type by picking all properties from ButtonAsButton and then removing 'as' and 'styleType'.
// & { as: 'unstyled' styleType?: BaseProps['styleType'] }: The & operator is used for intersection types in TypeScript.
// It combines multiple types into one. This means that the resulting type has all the properties of the connected types.
// Here, it’s adding an as property with a value of 'unstyled' and an optional styleType property with the type of BaseProps['styleType'].
// So, ButtonAsUnstyled is a type that has all the properties of ButtonAsButton except for 'as' and 'styleType', and it also has an as property with a fixed value of 'unstyled' and an optional styleType property.
// This is typically done to create a specific version of a more general type. In this case, ButtonAsUnstyled is a specific version of ButtonAsButton where as is always 'unstyled'.
// The styleType is optional and, if provided, must match the styleType in BaseProps.

// Idea taken from: https://dev.to/frehner/polymorphic-button-component-in-typescript-c28

import * as React from 'react';
import type { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

type TProps = {
  children?: React.ReactNode
  className?: string
  styleType?: 'primary' | 'secondary' | 'outlined' | 'disabled' | 'warning' | 'danger' | 'transparent' | 'unstyled'
  iconLeft?: string
  iconRight?: string
  btnSize?: 'small' | 'Medium' | 'Large'
  text?: string
  txtSize?: 'small' | 'Medium' | 'Large'
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

type ButtonAsButton = TProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof TProps> & {
    as?: 'default'}

type ButtonAsUnstyled = Omit<ButtonAsButton, 'as' | 'styleType'> & {
  as: 'unstyled'
  styleType?: TProps['styleType']
}

type ButtonAsLink = TProps &
  Omit<LinkProps, keyof TProps> & {
    as: 'link'
  }

type ButtonAsExternal = TProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof TProps> & {
    as: 'externalLink'
}

type BtnProps =
| ButtonAsButton
| ButtonAsExternal
| ButtonAsLink
| ButtonAsUnstyled

export function LuminaButtonX(props:BtnProps): React.ReactElement {
  const allClassNames = `${props.styleType ? props.styleType: ''} ${props.className ? props.className: ''
  }`

  if (props.as === 'link') {
    const {className, styleType, as, ...rest} = props as ButtonAsLink;
    return <Link className={allClassNames} {...rest}/>
  }else if (props.as === 'externalLink') {
    const {className, styleType, as, ...rest} = props as ButtonAsExternal;
    return (
      <a
        className={allClassNames}
        target='_blank'
        rel='noopener noreferrer'
        {...rest}
      >
        {props.children}
      </a>
    )
  } else if (props.as === 'unstyled') {
    const {className, styleType, as, ...rest} = props as ButtonAsUnstyled;
    return <button className={className} {...rest} />
  } else {
    const {className, styleType, as, ...rest} = props as ButtonAsButton;
    return <button className={allClassNames} {...rest} />
  }

}
