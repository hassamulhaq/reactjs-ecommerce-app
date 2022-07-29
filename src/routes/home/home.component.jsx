import React, {Fragment} from "react"
import Directory from "../../components/directory/directory.component"

function HomeComponent() {

    const categories = [
        {
            "id": 1,
            "title": 'Hats',
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": 'Sneakers',
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 3,
            "title": 'Jackets',
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        }
    ]

    return (
        <Fragment>
            <Directory categories={categories}/>
        </Fragment>
    )
}

export default HomeComponent