import React from 'react';

const Paragraph = ({ length = 1 }) => {
  const text = `Sed a rhoncus elit. Pellentesque ultrices vestibulum velit, quis pellentesque leo sagittis non.
    Integer vel dictum orci. Praesent ac interdum massa. Aenean felis dui, aliquam nec consectetur
    non, rutrum eget diam. Proin id lorem eu est commodo condimentum et ac arcu. Integer ut libero
    id nibh aliquet gravida in sit amet neque. Donec nec justo ligula. Vestibulum eget tortor
    tempor, suscipit lorem a, luctus neque. Nam venenatis tortor nisl, sit amet fermentum nibh
    imperdiet a.`;
  return <p style={{ paddingLeft: 20, paddingRight: 20 }}>{text.repeat(length)}</p>;
};

export default Paragraph;
