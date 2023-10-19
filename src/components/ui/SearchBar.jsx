const SearchBar = () => {
  return (
    <form className="input-group mb-3 w-100 col">
      <input
        type="search"
        className="form-control border-dark mt-3 ms-auto"
        placeholder="Buscar"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
    </form>
  )
}

export default SearchBar
