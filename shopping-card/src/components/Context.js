import React, {Component} from 'react';


export const DataContext = React.createContext();

export class DataProvider extends Component{

    state = {
        products:[
            {
                "_id":1,
                "title" : "Hoddie 1",
                "src": "https://rendering.documents.cimpress.io/v1/vp/preview?scene=https://scenes.documents.cimpress.io/v1/scenes/32a0f6d4-08be-448d-bbe9-61e3c6e159d9&width=690&height=690&quality=80",
                "description":"A lather Hoodie",
                 "content" : "A best quality hoodie at sufficent price.A best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent price",
                 "price": 500,
                 "count": 1
            },
            {
                "_id":2,
                "title" : "Hoddie 2",
                "src": "https://images-na.ssl-images-amazon.com/images/I/41TviHjrnxL.jpg",
                "description":"A lather Hoodie",
                 "content" : "A best quality hoodie at sufficent price.A best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent price",
                 "price": 800,
                 "count": 1
            },
            {
                "_id":3,
                "title" : "Hoddie 3",
                "src": "https://images-na.ssl-images-amazon.com/images/I/61eVjRu2RnL._AC_UY445_.jpg",
                "description":"A lather Hoodie",
                 "content" : "A best quality hoodie at sufficent price.A best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent price",
                 "price": 900,
                 "count": 1
            },
            {
                "_id":4,
                "title" : "Hoddie 4",
                "src": "https://images-na.ssl-images-amazon.com/images/I/61BQyA3qG3L._UX569_.jpg",
                "description":"A lather Hoodie",
                 "content" : "A best quality hoodie at sufficent price.A best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent price",
                 "price": 1500,
                 "count": 1
            },
            {
                "_id":5,
                "title" : "Hoddie 5",
                "src": "https://images-na.ssl-images-amazon.com/images/I/51iFfDgR56L._UX569_.jpg",
                "description":"A lather Hoodie",
                 "content" : "A best quality hoodie at sufficent price.A best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent priceA best quality hoodie at sufficent price",
                 "price": 900,
                 "count": 1
            }
        ]
    }

            render(){
                const {products} = this.state;
                return(
                    <DataContext.Provider value={{products}}>
                            {this.props.children}
                    </DataContext.Provider>
                )
            }

}