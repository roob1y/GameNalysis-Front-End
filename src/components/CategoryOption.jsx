export const CategoryOption = ({handleClick, optionVal}) => {
  return (
    <li>
      <button onClick={() => handleClick(optionVal)}>
        {optionVal}
      </button>
    </li>
  )
}

export default CategoryOption;