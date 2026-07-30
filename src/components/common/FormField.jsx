function FormField({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    error,
    min,
    as = "input",
    rows,
    required = false
}) {
    const errorId = `${name}-error`;

    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>

            {as === "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    required={required}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    min={min}
                    required={required}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                />
            )}

            {error && (
                <small
                    id={errorId}
                    className="error-message"
                >
                    {error}
                </small>
            )}
        </div>
    );
}

export default FormField;