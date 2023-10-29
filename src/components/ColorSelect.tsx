interface colorsProp {
  color: string
}

export const ColorSelect = ({ color }: colorsProp) => {
  return (
    <div className={`${color} w-4 h-4 p-4 rounded-full cursor-pointer`}></div>
  )
}
