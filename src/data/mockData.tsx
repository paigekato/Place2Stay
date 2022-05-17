import Miami from '/asset/image/miami.png';
import Montreal from '/asset/image/montreal.png';
import NewYork from '/asset/image/new-york.png';
import Asset1 from '/asset/image/place-1.png';
import Asset2 from '/asset/image/place-2.png';
import Toronto from '/asset/image/toronto.png';
import Vancouver from '/asset/image/vancouver.png';

export const homeMockData = {
  sections: {
    placeCtas: {
      title: 'Find Your Getaway',
      description:
        'Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces',
      places: [
        {
          id: 1,
          image: Asset1,
          imageLabel: 'From $126',
          title: '408 St. Jacques | 1 Br',
          location: 'Vancouver, BC',
          details: [
            {
              title: 'Access codes',
              items: [
                {
                  itemLabel: 'building',
                  itemDetail: '7853',
                },
                {
                  itemLabel: 'apartment',
                  itemDetail: '7863',
                },
              ],
            },
            {
              title: 'Wifi',
              items: [
                {
                  itemLabel: 'name',
                  itemDetail: 'places2stay',
                },
                {
                  itemLabel: 'password',
                  itemDetail: 'funwaytostay',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          image: Asset2,
          imageLabel: 'From $126',
          title: '408 St. Jacques | 1 Br',
          location: 'Victoria, BC',
        },
        {
          id: 3,
          image: Asset1,
          imageLabel: 'From $126',
          title: '408 St. Jacques | 1 Br',
          location: 'Tofino, BC',
        },
        {
          id: 4,
          image: Asset2,
          imageLabel: 'From $126',
          title: '408 St. Jacques | 1 Br',
          location: 'Whistler, BC',
        },
      ],
    },
    cityCtas: {
      title: '20+ Cities to Explore',
      places: [
        {
          id: 1,
          image: Miami,
          title: 'Miami',
        },
        {
          id: 2,
          image: NewYork,
          title: 'New York',
          imageLabel: 'New',
        },
        {
          id: 3,
          image: Montreal,
          title: 'Montreal',
        },
        {
          id: 4,
          image: Vancouver,
          title: 'Vancouver',
        },
        {
          id: 5,
          image: Toronto,
          title: 'Toronto',
        },
      ],
    },
  },
};
