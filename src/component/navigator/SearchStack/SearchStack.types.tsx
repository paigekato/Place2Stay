export type SearchStackScreens = {
  SearchHome: undefined;
  SearchDates: {
    location: string;
  };
  SearchGuests: {
    location: string;
    dates: string;
  };
  SearchResults: {
    location: string;
    dates: string;
    guests: Record<string, number>;
  };
};
