import {
    //Actions
    fetchLastTreindGifs, fetchLastSearchGifs,
    //types
    FETCH_TRENDING_GIF, FETCH_SEARCH
} from './actions';

test('fetchLastTreindGifs retrives gifs', async () => {
    const response = await fetchLastTreindGifs({ limit: 1 });
    const gifs = response.payload.gifs;

    expect(gifs).toBeTruthy();
    expect(response.type).toBe(FETCH_TRENDING_GIF);
});

test('fetchLastSearchGifs retrives gifs', async () => {
    const response = await fetchLastSearchGifs({ q: 'star', limit: 1 });
    const gifs = response.payload.gifs;

    expect(gifs).toBeTruthy();
    expect(response.type).toBe(FETCH_SEARCH);
});
