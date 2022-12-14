
import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);



const response = await openai.listModels();

console.log(response)
// function getAIResponse(question: string) {
//   const response = openai.createAnswer({
//     model: "code-davinci-001",
//     search_model: "code-davinci-001",
//     question: question,
//     examples_context:
//       "The website's backend is completely hosted via Next.js API routes in pages/api",
//     examples: [["Where are api calls being made?", "pages/api"]],
//     file: "file-cP5no9GzITTbZVEnfI85uRP2",
//     max_rerank: 10,
//     max_tokens: 100,
//     stop: ["\n", "<|endoftext|>"],
//   });
//   return response;
// }

