
export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href?: any;
  total: number;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Artist {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Paginated {
  href: string;
  items: Artist[] | Album[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export interface ArtistsResponse {
  artists: Paginated;
}


export interface Album {
  album_group: string;
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

