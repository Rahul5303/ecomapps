# ecomapps
# for installation 
npx create-react-app ecomapps, npm start

# make a folder in src folder 
folder 1.Component 
In Component Folder made a file-1.Productlist.jsx
                                2.ProductDetails.jsx
folder 2.Pages
In Pages Folder made a file-1.MainRoute.jsx where all the routes are there

# for Router Installation
npm i react-router-dom
import in index.js with <BrowserRouter></BrowserRouter>



# run api 
1.npm i json-server
2.In package.json file in script i have added "server":"json-server --watch db.json --port 8000",
"scripts": {
    "start": "react-scripts start",
    "server":"json-server --watch db.json --port 8000",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
3.to run api => npm run server  
4.api is running on localhost and api is http://localhost:8000/products

# Css External Library for design 
Chakra Ui
# installation for chakra ui
command:-npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
# for icons 
command:-npm i @chakra-ui/icons
import in index.js with <ChakraProvider></ChakraProvider>

# deployment 
deployed on netlify
# installation for netlify
command :-1. npm run build 
          2. npm run deploy 

deploy link:-https://legendary-croquembouche-758790.netlify.app


# Techstacks

1.HTML
2.CSS
3.JS
4.React.Js


