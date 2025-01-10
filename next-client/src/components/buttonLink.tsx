import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const ButtonLink = ({uri}:{uri:string}) => {
  return (
    <Button className='m-4   className="sticky top-0 z-50"'>
      <Link href={uri}>Go Back</Link>
    </Button>
  );
}

export default ButtonLink