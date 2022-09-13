const CategoryName = ({ item }) => {
    return (
        <p key={item.id}>{item.categoryName}</p>
    )
}

export default CategoryName;