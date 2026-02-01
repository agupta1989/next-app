
export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      Meals Layout
      {children}
    </div>
  )
}