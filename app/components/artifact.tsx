import {Divider, Typography, Card, CardContent} from "@mui/material";
import React from "react";
import Image from "next/image";

export default function Artifact({
  title,
  stack,
  image,
  children
}: {
  title?: string;
  stack?: string;
  image?: string;
  children?: React.ReactNode
}) {
  return (
    <Card className="m-5">
      <CardContent>
        <Image width={800} height={800} alt="" src={image as string} className="float-left m-5" />
        <Typography variant='h6' component="h6">{ title }</Typography>
        <Typography variant='caption' component='p' color='gray'>Tech Stack: { stack }</Typography>
        <Divider />
        <Typography variant='body1' component='p'>
          { children }
        </Typography>
      </CardContent>
    </Card>
  )
}