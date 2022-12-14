
import { Configuration, OpenAIApi } from "openai";


const configuration = new Configuration({
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);




const response = await openai.createEdit({
  model: "text-davinci-edit-001",
  input: "I quit recently because management is seriously fucked. All the employees know that product development is so slow and the founder is a pathological liar who makes false promises. It’s purely ego-driven at this point and the culture is just so toxic because of that.",
  instruction: "edit ",
});


console.log(response.data.choices)