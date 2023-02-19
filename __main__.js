// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let ingredients = context.params.ingredients || ''; 
let arr = ingredients.split(",");


let prompt = [
  "I want you to generate a vegetarian recipe using only the following ingredients. You must use all ingredients listed:",
  ingredients,
  "You should output the name of the dish created, the steps needed to create it, and the time it will take to create. Also print "
].join('\n')

let data = await lib.openai.playground['@0.0.4'].completions.create({
  model: `text-davinci-003`,
  prompt: [`${prompt}`],
  max_tokens: 512,
  temperature: 0.5,
  top_p: 1,
  n: 1,
  echo: false,
  presence_penalty: 0,
  frequency_penalty: 0,
  best_of: 1
});
console.log('error test')
console.log(data.choices[0].text)


return data.choices[0].text;
const result = str.replace(/\./g, '.\n')
console.log(result);
