import { CardProps } from "@yext/search-ui-react";
import { Product } from "../types/products";
import parse from "html-react-parser";
import { LexicalRichText } from "@yext/react-components";
import ReactMarkdown from "react-markdown";

const ProductCard = ({ result }: CardProps<Product>): JSX.Element => {
  const name = result.name;
  const fruitImage = result.rawData.photoGallery
    ? result.rawData.photoGallery[0].image?.url
    : undefined;

  const price = result.rawData.price?.value;
  const desc = result.rawData.c_testtest ? result.rawData.c_testtest : "";
  // const mark = result.rawData.c_markdowntest
  //   ? result.rawData.c_markdowntest["markdown"]
  //   : "nothing";
  console.log(result.rawData);
  return (
    <div className="flex w-2/12 border border-red-800 flex-col my-4 justify-between bg-white mx-2 w-60">
      <div>
        <img src={fruitImage} className="w-full" />
        <div className="flex flex-col p-2 w-8/12 text-left">
          <h1 className="font-bold">{name}</h1>
          <p className="my-4"> ${price}</p>
        </div>
      </div>
      <div className="flex flex-col p-2 mr-2 justify-center">
        <button className="bg-red-800 text-white rounded p-2">Order</button>
        <button className="bg-white text-red-800 rounded drop-shadow-sm p-2 border border-red-800 my-2">
          Visit Website
        </button>
        {/* <div>{desc2 ? parse(desc2["html"]) : "nothing"}</div> */}
        <div>
          {desc === "" ? null : (
            <LexicalRichText serializedAST={JSON.stringify(desc["json"])} />
          )}
        </div>
        {/* <div className="some stylsheet">
          <ReactMarkdown children={mark} />
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
