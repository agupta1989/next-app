import React from 'react';
import Link from 'next/link';

const About = () => {

  return (
    <div>
      Hello world about page
      {/* using <a> would re render the entire page, link let the client side js to handle the routing */}
      <Link href="/about/test">Go to Test age</Link>
    </div>
  )
}

export default About;