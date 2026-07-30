function SearchInput({
    value,
    onChange,
    placeholder = "Search..."
}) {
    return (
        <input
            className="search-input"
            type="text"
            value={value}
            onChange={onChange}
            placeholder={`🔍 ${placeholder}`}
            aria-label={placeholder}
        />
    );
}

export default SearchInput;