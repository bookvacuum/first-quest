import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req: { body: { input: string; instruction:string; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { result: string | undefined; }): void; new(): any; }; }; }) {
    const response = await openai.createEdit({
              model: "text-davinci-edit-001",
              input: req.body.input,
              instruction: req.body.instruction,
            });
  res.status(200).json({ result: response.data.choices[0].text });
}