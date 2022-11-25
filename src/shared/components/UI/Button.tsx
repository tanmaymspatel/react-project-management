import { ButtonProps } from "../../models/buttonProps.model";

function Button(props: ButtonProps) {
    return (
        <button type={props.type} className={props.className} onClick={props.handleClick} >{props.children}</button>
    );
};

export default Button;
