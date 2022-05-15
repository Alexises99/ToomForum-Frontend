interface Props {
  children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <div className="container flex overflow-x-auto mx-1 gap-4 sm:justify-center">
      {children}
    </div>
  )
}

export default Container