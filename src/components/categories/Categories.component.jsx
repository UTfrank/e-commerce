import CategoryItem from "../category-item/CategoryItem.component";

import "./categories.styles.scss";



const Categories = ({ directories }) => {
  return (
    <div className="categories-container">
      {directories.map((directory) => (
        <CategoryItem key={directory.id} directory={directory} />
      ))}
    </div>
  )
}

export default Categories;