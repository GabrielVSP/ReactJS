import { ReactNode } from "react";

export default function Button({
        disabled, 
        children,
        onClick
    }: 

    {
        disabled: boolean, 
        children: ReactNode,
        onClick: () => void
    }) {

    return (

        <button onClick={() => onClick()} style={{backgroundColor: disabled ? 'grey' : 'red', color: 'white'}}>{children}</button>

    )

}