import {Container, Typography} from "@mui/material";


export default function Home() {
  return (
    <Container className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Typography variant='h1' className="row-start-2">John Lazaro</Typography>
      <Typography variant='caption' className="row-start-3 align-top">CST Developer</Typography>
    </Container>
  )
}
