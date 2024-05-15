import { ThemeProvider } from 'next-themes'

export const Providers = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  )
}
