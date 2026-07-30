function Button({
    children,
    variant,
    size,
    type = "button",
    icon,
    onClick,
    ariaLabel,
    disabled = false,
    className = "" }) {
    return (
        <button
            className={`button button-${variant} button-${size} ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
        >
            {icon}
            {children}
        </button>
    );
}

export default Button;