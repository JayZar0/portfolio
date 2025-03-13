import {Container, Typography} from "@mui/material";
import Image from "next/image";


export default function Home() {
  return (
    <Container className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image width={150} height={150} src='/pikachu.gif'  alt='image' className='row-end-2' unoptimized={true} />
      <Typography variant='h1' className="row-start-2">John Lazaro</Typography>
      <Typography variant='caption' className="row-start-3 align-top">CST Student</Typography>
    </Container>
  )
}
