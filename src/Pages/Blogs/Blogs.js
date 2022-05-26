import React from "react";

const Blogs = () => {
  return (
    <div className="glass bg-secondary hover:bg-secondary py-5">
      <h2 className="font-bold text-2xl text-center text-white pt-4">
        Question And Answer
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 m-10 gap-10">
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px] bg-white pb-2">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-secondary text-white h-24 flex items-center justify-center">
            Question 1 : How will you improve the performance of a React
            Application?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <li className="ml-5 text-left">
            Keeping component state local where necessary
          </li>
          <li className="ml-5 text-left">
            Memorizing React components to prevent unnecessary re-renders.
          </li>
          <li className="ml-5 text-left">
            Code-splitting in React using dynamic import()
          </li>
          <li className="ml-5 text-left">List virtualization in React.</li>
          <li className="ml-5 text-left">Lazy loading images in React.</li>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]  bg-white">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-secondary text-white flex items-center justify-center h-24">
            Question 2 : What are the different ways to manage a state in a
            React application?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            Different Way to manage state in react application is using{" "}
            <b>Context Api</b>, <b>Redux</b>,
            <b>suing hooks like custom hook, react query etc.</b>
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]  bg-white">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-secondary text-white  flex items-center justify-center h-24">
            Question 3 : How does prototypical inheritance work?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3 max-h-46 overflow-auto">
            The prototypical inheritance is a feature in JavaScript. It is used
            to add method and properties in objects. It is a method by which an
            object can inherit the properties and methods of another object.
            Prototypical inheritance allows us to reuse the properties or
            methods from one JavaScript object to another object through a
            reference pointer function.
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]  bg-white">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-secondary text-white h-24 flex items-center justify-center">
            Question 4 : Why you do not set the state directly in React. For
            example, if you have const [products, setProducts] = useState([]).
            Why you do not set products = [...] instead, you use the setProducts
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            In react application we do const [products, setProducts] =
            useState([]) because it store the the state of a site. It makes the
            render more efficient. and we can also pass this state into other
            components easily. And we know that if any change occur the ui react
            dom identify this through the state. Thats why we use this syntax
            not products = [...] this.
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]  bg-white">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-secondary text-white h-24 flex items-center justify-center">
            Question 5 : You have an array of products. Each product has a name,
            price, description, etc. How will you implement a search to find
            products by name?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            We have to do filter operation to search product by name. The syntax
            given below.
            <br />
            const result = products.filter(product => product.name === name);
            <br />
            we will get the search result in the result variable.
          </h6>
        </div>
        <div className="border-2 rounded-lg shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_2px_6px]  bg-white">
          <h5 className="font-bold m-2 p-2 mb-3 rounded-md bg-secondary text-white h-24 flex items-center justify-center">
            Question 6 : What is a unit test? Why should write unit tests?
          </h5>
          <span className="text-lg flex justify-start font-bold px-3">
            Answer:
          </span>
          <h6 className="text-justify px-5 pb-3">
            Where individual units or components of a software are tested it is
            called unit test. The purpose is to verify that each unit of
            software code is working as expected. Unit testing is an important
            step in the development process. Because unit tests help to fix bugs
            earlier. It helps us to understand the testing code base and enables
            them to make changes quickly. Unit tests help with code re-use. Unit
            testing is done in early development, then it saves our time also.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
