function RadioGroup({
    label,
    name,
    value,
    onChange,
    options,
    error
}) {
    const errorId = `${name}-error`;

    return (
        <fieldset className="form-group">
            <legend>{label}</legend>

            <div className="radio-group">
                {options.map((option) => {
                    const optionId = `${name}-${option}`;

                    return (
                        <div key={option}>
                            <input
                                id={optionId}
                                type="radio"
                                name={name}
                                value={option}
                                checked={value === option}
                                onChange={onChange}
                                aria-describedby={error ? errorId : undefined}
                            />

                            <label htmlFor={optionId}>
                                {option}
                            </label>
                        </div>
                    );
                })}
            </div>

            {error && (
                <small
                    id={errorId}
                    className="error-message"
                >
                    {error}
                </small>
            )}
        </fieldset>
    );
}

export default RadioGroup;