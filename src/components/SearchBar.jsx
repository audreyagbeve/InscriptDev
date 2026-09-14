function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input 
            className="search-bar"
            type="text"
            placeholder="Search by phone model..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
        />
    );
}

export default SearchBar;