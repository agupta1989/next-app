import React from 'react'

function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>layout from Users component</h2>
      <div>{children}</div>
    </div>
  )
}

export default Layout