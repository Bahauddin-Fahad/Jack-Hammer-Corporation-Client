import React from "react";

const MyPortfolio = () => {
  return (
    <div className="flex justify-center items-center py-1 bg-secondary">
      <section className="portfolio my-shadow rounded p-3 mx-2 glass text-white flex flex-wrap justify-center gap-y-3 gap-x-10">
        <h2 className="text-center basis-full text-3xl mb-2 underline underline-offset-2 font-medium">
          My Portfolio
        </h2>
        <section className="basis-80 shrink space-y-3">
          <div className="flex-wrap">
            <label className="input-group max-w-sm w-full">
              <span className="font-medium text-neutral-focus">Name:</span>
              <input
                class="input input-bordered input-sm xs:max-w-xs lg:max-w-lg w-full"
                value="S.M. Bahauddin Fahad"
                readOnly
              />
            </label>
          </div>
          <div className="flex-wrap">
            <label className="input-group max-w-sm w-full">
              <span className="font-medium text-neutral-focus">Email:</span>
              <input
                type="text"
                className="input input-bordered input-sm xs:max-w-xs lg:max-w-lg w-full"
                value="bahauddin.fahad819@gmail.com"
                readOnly
              />
            </label>
          </div>

          <section className="space-y-2">
            <h3 className="underline underline-offset-2">
              Education Background :
            </h3>
            <div class="overflow-x-auto border-[4px] rounded-xl text-neutral-focus">
              <table class="table table-compact w-full">
                <thead className="text-center">
                  <tr>
                    <th>Passing Year</th>
                    <th>Exam</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>2022</td>
                    <td>B.Sc in CSE</td>
                  </tr>
                  <tr>
                    <td>2017</td>
                    <td>H.S.C</td>
                  </tr>
                  <tr>
                    <td>2015</td>
                    <td>S.S.C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <section className="flex flex-col items-start gap-2 basis-80 shrink">
          <h3 className="underline underline-offset-2">
            Technologies that I learned :
          </h3>
          <div className="">
            <input
              type="checkbox"
              class="checkbox ring-2 ring-white checkbox-xs"
              checked
              readOnly
            />
            <h5>HTML and CSS with Responsive Design</h5>
          </div>
          <div className="">
            <input
              type="checkbox"
              class="checkbox ring-2 ring-white checkbox-xs"
              checked
              readOnly
            />
            <h5>CSS Framework : Tailwind & Bootstrap</h5>
          </div>
          <div className="">
            <input
              type="checkbox"
              class="checkbox ring-2 ring-white checkbox-xs"
              checked
              readOnly
            />
            <h5>Intermediate JavaScript & DOM manupulation</h5>
          </div>
          <div className="">
            <input
              type="checkbox"
              class="checkbox ring-2 ring-white checkbox-xs"
              checked
              readOnly
            />
            <h5>Front-end JS Framework : React JS</h5>
          </div>
          <div className="">
            <input
              type="checkbox"
              class="checkbox ring-2 ring-white checkbox-xs"
              checked
              readOnly
            />
            <h5>Firebase Authentication</h5>
          </div>
          <div className="">
            <input
              type="checkbox"
              class="checkbox ring-2 ring-white checkbox-xs"
              checked
              readOnly
            />
            <h5>API implementation</h5>
          </div>

          <div className="">
            <input
              type="checkbox"
              class="checkbox ring-2 ring-white checkbox-xs"
              checked
              readOnly
            />
            <h5>Back-end JS Framework : Express JS</h5>
          </div>
          <div className="">
            <input
              type="checkbox"
              class="checkbox ring-2 ring-white checkbox-xs"
              checked
              readOnly
            />
            <h5>Data Base management with Mongo DB</h5>
          </div>
        </section>

        <section className="basis-full">
          <section className="max-w-xs mx-auto">
            <h3 className="underline underline-offset-2 mb-2">
              My Three Projects :
            </h3>
            <section className="flex flex-col gap-3">
              <a
                href="https://bahauddin-fahad.github.io/influencer-gears"
                target="_blank"
                rel="noreferrer"
                class="btn btn-sm glass"
              >
                First Project
              </a>
              <a
                href="https://convention-center-bahauddin-fahad.netlify.app"
                target="_blank"
                rel="noreferrer"
                class="btn btn-sm glass"
              >
                Second Project
              </a>
              <a
                href="https://create-eve-art.web.app"
                target="_blank"
                rel="noreferrer"
                class="btn btn-sm glass"
              >
                Third Project
              </a>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default MyPortfolio;
