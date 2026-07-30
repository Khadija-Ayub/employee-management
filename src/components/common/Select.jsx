function Select({
    name,
    label,
    value,
    onChange,
    error,
    options,
    required = false
}) {
    const errorId = `${name}-error`;

    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>

            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
            >
                <option value="">
                    Select {label}
                </option>

                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

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

export default Select;