import {
    //Actions
    fetchTrendingGifs, fetchGifsByID, fetchSearchGifs,
    //types
    FETCH_TRENDING_GIF, FETCH_GIFS_BY_ID, FETCH_SEARCH
} from './actions';

test('fetchTrendingGifs retrives gifs', async () => {
    const response = await fetchTrendingGifs({ limit: 1 });
    const gif = response.payload.data[0];

    expect(gif.type).toBe('gif');
    expect(response.type).toBe(FETCH_TRENDING_GIF);
});

test('fetchGifsByID retrives gifs', async () => {
    const response = await fetchGifsByID({ ids: ["feqkVgjJpYtjy", "7rzbxdu0ZEXLy"] });
    const gif = response.payload.data[0];

    expect(gif.type).toBe('gif');
    expect(response.type).toBe(FETCH_GIFS_BY_ID);
});

test('fetchSearchGifs retrives gifs', async () => {
    const response = await fetchSearchGifs({ q: 'star', limit: 1 });
    const gif = response.payload.data[0];

    expect(gif.type).toBe('gif');
    expect(response.type).toBe(FETCH_SEARCH);
});
