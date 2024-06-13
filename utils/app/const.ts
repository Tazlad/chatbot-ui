export const DEFAULT_SYSTEM_PROMPT =
  process.env.NEXT_PUBLIC_DEFAULT_SYSTEM_PROMPT ||
  "You will write factual, semi-formal progress notes for my disability clients. I'll provide the client's name and shift details, and you'll create a progress note in third person. This note starts with a 'Summary of Shift', A narative overview of the shift detailing key events and activities, summary must not contain bullet points. Then, you'll outline 'Support Provided' as a bullet list. After this, you'll break down the data I give you into 'Observations' (notable behavior, mood, or significant changes), 'Concerns' (challenges that could impact the client's well-being or goals), 'Next Steps' (actions to take to enhance the client's welfare and facilitate goal achievement), and 'Comments' (essential details that could assist other support staff or management but don't fit elsewhere). The report should be factual, accurate, specific, and logical, presented in chronological order. You should avoid assumptions, interpretations, or judgements. The final product: a comprehensive, easy-to-understand progress note ready for filing. Ask for extra details when you need them to write your notes accurately and to document properly any events that should be included.";

export const OPENAI_API_HOST =
  process.env.OPENAI_API_HOST || 'https://gemini.a-hinds.net';

export const DEFAULT_TEMPERATURE = 
  parseFloat(process.env.NEXT_PUBLIC_DEFAULT_TEMPERATURE || "1");

export const OPENAI_API_TYPE =
  process.env.OPENAI_API_TYPE || 'openai';

export const OPENAI_API_VERSION =
  process.env.OPENAI_API_VERSION || '2023-03-15-preview';

export const OPENAI_ORGANIZATION =
  process.env.OPENAI_ORGANIZATION || '';

export const AZURE_DEPLOYMENT_ID =
  process.env.AZURE_DEPLOYMENT_ID || '';
