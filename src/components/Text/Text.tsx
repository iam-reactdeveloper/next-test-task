import React from 'react'

export const Text = (props: any) => {
  const { content } = props;
  return <p className="text-6xl font-bold		">{content?.toUpperCase()}</p>;
}

