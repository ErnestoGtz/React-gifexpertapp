import { getGifs } from '../../helpers/getGifs';

describe('Pruebas con getGifs Fetch', () => {
    test('debe de traer 10 elementos', async() => {
        const gifs = await getGifs('Ranma');
        expect(gifs.length).toBe(10);
    });
    test('debe de estar inicializado en 0 gifs',async ()=>{
        const gifs = await getGifs('');
        //console.log(gifs);
        expect(gifs.length).toBe(0);
    });
    
})
