import { ButtonProps } from "../../models/buttonProps.model";

/**
 * @name Button
 * @param props button props
 * @returns a reusable button component
 */
function Button(props: ButtonProps) {
    return (
        <button type={props.type} className={props.className} onClick={props.handleClick} >{props.children}</button>
    );
};

export default Button;
