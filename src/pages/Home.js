import React from "react";
import NavBar from "../components/Nav";

function Home() {
  return (
    <>
      <div className="p-2">
        <NavBar />
        <div className="bg-#dfdacf h-100 p-8">
          <div className="bg-white rounded-3xl columns-1 lg:columns-2 p-12">
            {/* image section */}
            <div className="mb-10 lg:mb-0 overflow-hidden rounded-3xl">
              <img
                className="rounded-3xl hover:scale-110 delay-300 duration-300"
                src="https://www.businesslist.com.ng/img/ng/e/_1583325978_27895.jpg"
                alt=""
              />
            </div>

            {/* ingridients */}
            <div className="">
              <h1 className="text-2xl font-bold underline underline-offset-5 text-center">
                Amala, Ewedu and Gbegiri
              </h1>

              <div className="mb-4">
                <h5 className="text-lg uppercase">ingridients:</h5>
                <ul className="text-sm list-decimal">
                  <div className="columns-1 lg:columns-3 leading-8">
                    <li>Yam Flour (Elubo) </li>
                    <li>1 Cup Ewedu leaves</li>
                    <li> 2 cups of Beans </li>
                    <li>Locust beans </li>
                    <li>8 Scotch bonnets (ata rodo)</li>
                    <li>2 Bell Peppers (optional)</li>
                    <li>Onions</li>
                    <li>8-10 Chilli Peppers</li>
                    <li> 1 Cooking spoon Palm oil</li>
                    <li>Grounded Crayfish</li>
                    <li>Seasoning cubes</li>
                    <li>Salt to taste</li>
                  </div>
                </ul>
              </div>

              <div className="mb-4">
                <h5 className="text-lg uppercase">instructions:</h5>
                <p className="text-sm leading-6">
                  <b>Step 1: </b> Gbegiri preparation: Peel beans using any
                  technique you find convenient then wash thoroughly to remove
                  skin residue. Next, pour peeled beans into a cooking pot with
                  enough water to cook it soft. When beans are very soft, mash
                  with a jute broom while still in pot or pour into a blender
                  and puree into a smooth consistency. Pour pureed cooked beans
                  into pot; add blended peppers/onion, palm oil, seasoning
                  cubes, ground crayfish and leave to cook. Tate for salt and
                  add some more water if too thick.
                  <br /> <b>Step 2: </b>Ewedu preparation: Pour thoroughly
                  washed ewedu leaves into blender and blend. Pour back into a
                  small pot; add locust beans, ground crayfish and a pinch of
                  salt to taste. Allow to cook on low heat. That’s it, now your
                  delish Gbegiri and ewedu is ready!
                  <br /> <b>Step 3: </b>
                  Amala preparation: Bring water to boil in a pot. Still on the
                  stove, sprinkle in yam flour and turn with a wooden ladle till
                  you’ve it smooth and solid. To ensure it’s well cooked, add a
                  bit of water, then cover to steam on low heat for about 3-5
                  minutes. Stir properly and your soft amala is ready! Serve
                  with Gbegiri, ewedu and some stew.
                </p>
              </div>

              <div className="mb-4">
                <h5 className="text-lg uppercase">notes:</h5>
                <p>
                  Hint ***Gbegiri is best enjoyed spicy and should be served
                  hot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
