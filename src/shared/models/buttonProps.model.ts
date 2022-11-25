/**
 * @description type of the reusable button component
 */
export type ButtonProps = {
    type: `button` | `submit` | `reset` | undefined,
    className: string,
    handleClick?: () => void,
    children: any,
}
