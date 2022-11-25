export type ButtonProps = {
    type: `button` | `submit` | `reset` | undefined,
    className: string,
    handleClick?: () => void,
    children: string,
}
