const SubmitBottom = ({ label }: { label: string }) => {
  return (
    <input
      type="submit"
      value={label}
      className="bg-blue-400 w-full rounded-md mt-4 h-12 font-medium text-white text-lg hover:cursor-pointer"
    />
  )
}

export default SubmitBottom
