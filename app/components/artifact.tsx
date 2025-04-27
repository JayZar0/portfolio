import Typography from "@mui/material/Typography";
import {CardMedia, Divider} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
    // TODO add an image tag that will take the image of the project for displaying
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