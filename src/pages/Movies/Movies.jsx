import { SearchForm } from 'components/SearchForm';
import { SearchMovie } from 'components/SearchMovie';
import { Box } from 'helpers/Box/Box';
import { useState } from 'react';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState(null);

  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <Box>
      <SearchForm onSubmit={handleSubmit} />
      <SearchMovie value={searchQuery} />
    </Box>
  );
};
