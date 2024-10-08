export const handler = (req: Request, res: Response) => {
  console.log('Hello World', process.env.PROVIDER_KEY)
};