import { Divider, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface props {
  title?: string;
  stack?: string;
  image?: string;
  children?: React.ReactNode
}

/**
 * This is the artifact component that will store the projects that I have created
 * on the artifacts page
 * @param param
 * @returns 
 */
export default function Artifact({ title, stack, image, children }: props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
    >
      <Card className="m-5">
        <CardContent>
          <Image width={800} height={800} alt="" src={image as string} className="p-3 float-left" />
          <Typography variant='h6' component="h6">{title}</Typography>
          <Typography variant='caption' component='p' color='gray'>Tech Stack: {stack}</Typography>
          <Divider />
          <Typography variant='body1' component='p'>
            {children}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  )
}