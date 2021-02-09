import React from "react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);

export default function Search() {
return (
<InstantSearch searchClient={searchClient} indexName="articles">
    <SearchBox />
    <Hits />
  </InstantSearch>
)}
