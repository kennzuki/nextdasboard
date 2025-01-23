import React from 'react'
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: 'customer page',
    default: 'Acme customer page',
  },
  description: 'customer page',
 
};

export const Page = () => {
  return (
    <div>Customers Page</div>
  )
}
