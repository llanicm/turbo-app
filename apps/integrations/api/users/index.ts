export const config = {
  runtime: 'edge'
}

const handler = (req: Request, res: Response) => {
  console.log('Hello World');
  return new Response('Hello World');
};

export default handler;
