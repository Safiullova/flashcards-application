// const initialState = [
//     {
//         id: "14094",
//         english: "island",
//         transcription: "[ ˈaɪ.lənd ]",
//         russian: "остров",
//         tags: "",
//         tags_json: "[]",
//         status: "ACTIVE"
//     }
// ]

const GET_WORDS = 'http://itgirlschool.justmakeit.ru/api/words';
// const POST_WORD = '/add';

export const getApiResorce = async (url) => {
    try {
        const res = await fetch(url);
const data = await res.json();
console.log(data);
        if (!res.ok) {
            console.error('could not fetch.', res.status);
            return false;
        }
return data;
        // return await res.json();
    } catch (error) {
        return <h1>Loading...</h1>;
        // console.error('could not fetch.', error.message)
        // return false;
    }
}
// getApiResorce(GET_WORDS)
// .then(body => console.log(body))

(async () => {
    const words = await getApiResorce(GET_WORDS);
    console.log(words);
})();


// export function reduser(state = initialState, action){

//     switch(action.type){
//         case "POST" :

//     }
// }