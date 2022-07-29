import React from "react"
import "./directory.styles.css"



function DirectoryComponent(props) {

    //const [categoriesData, setcategoriesData] = React.useState(props)

    const categories = props.categories;
    const categoriesData = categories.map((category) =>
        <div key={category.id} className="category-block" data-id={category.id}>
            <div className="overlay"></div>
            <div className="category-block__bg" style={{backgroundImage: `url(${category.imageUrl})`}}>
                <div className="content-block__content">
                    <div className="inner-content">
                        <h2 className="inner-content__heading">{category.title}</h2>
                        <a href="/shop" className="inner-content__link">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="category-wrapper">
            {categoriesData}
        </div>
    )
}

export default DirectoryComponent