export class PUT {
    static async putWord(id, word) {
      try {
        const resp = await fetch(
          // `http://itgirlschool.justmakeit.ru/api/words/14488/update`,
          `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=utf-8" },
            body: JSON.stringify(word),
            // body: JSON.stringify({"english": "new",
            // "transcription": "[ ]",
            // "russian": "новое",
            // "tags": "",
            // "tags_json": "[]"}),
          }
        );
        const data = await resp.json();
        return data;
      } catch (e) {
        console.error(e);
      }
    }
  }
  export default PUT;