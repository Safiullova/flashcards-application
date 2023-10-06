export class POST {
    static async postWord(data) {
      try {
        await fetch("http://itgirlschool.justmakeit.ru/api/words/add", {
          method: 'POST',
          body: JSON.stringify(data),
          //   body: JSON.stringify({
          //     "english":"fire","transcription":"[faɪər]","russian":"огонь","tags":"","tags_json":"[]"
          // }),
          headers: { "Content-Type": "application/json;charset=utf-8" }         
        });
      } catch (e) {
        console.error(e);
      }
    }
  }
  export default POST;