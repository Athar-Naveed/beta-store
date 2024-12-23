const SearchBar = () => {
  return (
    <>
      <div className="search-bar bg-primary pb-4">
        <form action="#" method="post" className="flex">
        <img src="/assets/images/search.svg" className="absolute bg-white left-7 top-[135px]" width={20} height={20} alt="Search" />
        <input type="search" placeholder="What are you looking for?" className="rounded-lg pl-10 py-3 mx-4 w-full" />
        <img src="/assets/images/filter.svg" className="absolute bg-white right-8 top-[135px]" width={20} height={20} alt="Filter" />
        </form>
      </div>
    </>
  )
}

export default SearchBar;