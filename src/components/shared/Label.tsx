interface LabelProps {
  id: string
  name: string
  require: boolean
  description?: string
  highlight?: boolean
}

export const Label: React.FC<LabelProps> = ({
  id,
  name,
  require,
  description,
  highlight
}) => {
  return (
    <div className="mb-2 flex items-baseline">
      <label htmlFor={id}>{name}</label>
      {require && <p className="text-red-50">*</p>}
      <p
        className={`ml-3 text-caption-1 ${highlight ? 'font-bold text-red-main' : 'text-gray-60'} `}>
        {description}
      </p>
    </div>
  )
}
