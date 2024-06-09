interface IChipProps {
  content: string
}

const Chip = ({ content }: IChipProps) => {
  return (
    <span className="bg-purple-light mb-4 mr-2 inline rounded-full px-4 py-2 text-lg font-medium">
      {content}
    </span>
  )
}

export default Chip
