<!-- ============================================
       JAVASCRIPT — ALBUM ART LOADER
       Reads data-artist / data-album from each card,
       calls the iTunes Search API, and sets the result
       as a CSS background-image.
  ============================================= -->
  <script>
    /**
     * Fetch album artwork URL from the iTunes Search API.
     * The API is free and requires no API key.
     *
     * @param {string} artist  e.g. "Kendrick Lamar"
     * @param {string} album   e.g. "DAMN."
     * @returns {Promise<string|null>} a direct image URL or null
     */
    async function fetchAlbumArt(artist, album) {
      // Encode the search query for use in a URL
      const query = encodeURIComponent(`${artist} ${album}`);
      const url = `https://itunes.apple.com/search?term=${query}&entity=album&limit=5`;
 
      try {
        const response = await fetch(url);
        const data = await response.json();
 
        if (data.results && data.results.length > 0) {
          // artworkUrl100 = 100×100 image — swap size for higher res
          return data.results[0].artworkUrl100.replace('100x100bb', '600x600bb');
        }
      } catch (err) {
        console.warn(`Art fetch failed for "${artist} - ${album}":`, err);
      }
 
      return null;
    }
 
    /**
     * Loop through every .card-art element and load its artwork.
     * Also loads the Now Playing thumbnail.
     */
    async function loadAllAlbumArt() {
      // Get all card art divs that have data-artist attribute
      const cards = document.querySelectorAll('.card-art[data-artist]');
 
      for (const card of cards) {
        const artist = card.dataset.artist;   // reads data-artist="..."
        const album  = card.dataset.album;    // reads data-album="..."
 
        const artUrl = await fetchAlbumArt(artist, album);
 
        // Remove shimmer regardless of whether we got art
        card.classList.remove('loading');
 
        if (artUrl) {
          // Set the background-image CSS property directly in JS
          card.style.backgroundImage = `url(${artUrl})`;
        }
      }
 
      // Now Playing thumbnail — The Weeknd, After Hours
      const npThumb = document.getElementById('np-thumb');
      if (npThumb) {
        const npArt = await fetchAlbumArt('The Weeknd', 'After Hours');
        if (npArt) npThumb.style.backgroundImage = `url(${npArt})`;
      }
    }
 
    // Start loading once the HTML is fully parsed
    document.addEventListener('DOMContentLoaded', loadAllAlbumArt);
  </script>
