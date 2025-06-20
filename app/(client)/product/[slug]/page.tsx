import React from 'react'
import Container from '../../../../components/Container'

interface Props {
  params: {
    slug: string;
  };
}

const SingleProductPage = ({params}:Props) => {
    console.log(params);
  return (
    <div>
        <Container>
    <p>Single product:  </p>
        </Container>
    </div>
  )
}

export default SingleProductPage