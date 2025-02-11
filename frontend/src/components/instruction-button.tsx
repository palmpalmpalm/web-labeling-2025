import { Button, Modal } from "antd";
import { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const InstructionButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isSectionOneOpen, setIsSectionOneOpen] = useState(false);

  const handleSectionOneClick = () => {
    setIsSectionOneOpen((prev) => !prev);
  };

  const [isSectionTwoOpen, setIsSectionTwoOpen] = useState(false);

  const handleSectionTwoClick = () => {
    setIsSectionTwoOpen((prev) => !prev);
  };

  const [isSectionThreeOpen, setIsSectionThreeOpen] = useState(false);

  const handleSectionThreeClick = () => {
    setIsSectionThreeOpen((prev) => !prev);
  };

  return (
    <>
      <Button onClick={showModal}>Instruction</Button>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: { backgroundColor: "#1890ff", borderColor: "#1890ff" },
        }}
        centered
        width={1000}
      >
        <div className="text-3xl font-semibold text-center mb-2">
          <h1>Instruction</h1>
        </div>
        <div className="text-left text-sm">
          <div className="mt-1 mb-2">
            <Button
              className="text-xl font-semibold border-none"
              onClick={handleSectionOneClick}
            >
              I.{`)`} Task Details{" "}
              {isSectionOneOpen ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </Button>
            {isSectionOneOpen && (
              <div className="ml-8">
                <h3 className="text-base font-normal mb-2">
                  Please read this instruction carefully.
                </h3>
                <h3 className="text-base font-normal mb-2">
                  Imagine a robot running around looking for a person or an
                  object (such as a bag). Our goal is to help the robot find
                  what it is looking for by providing it with descriptions of
                  where the person or the object is.
                </h3>
                <h3 className="text-base font-normal mb-2">
                  You will be presented with map images, each of which shows the
                  location of the person or the object that the robot is looking
                  for.
                </h3>
                <h3 className="text-base font-normal">
                  <a className="font-semibold ">Your task: </a>
                  To help the robot, please answer multiple choice questions (
                  {"‘"}Yes{"’"} or {"‘"}No{"’"}) whether you would use the
                  spatial relations listed (such as “in front of,” “near,” etc.)
                  to describe the location of{" "}
                  <a className="font-semibold text-red-500">
                    the person or object
                  </a>{" "}
                  marked with a
                  <a className="font-semibold text-red-500"> small red dot</a>{" "}
                  with respect to the{" "}
                  <a className="font-semibold text-blue-400">building</a>{" "}
                  highlighted in{" "}
                  <a className="font-semibold text-blue-400">blue </a>(example
                  as shown below).
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1148675244324823080/image.png?ex=65e75a2f&is=65d4e52f&hm=116cfeb2d4ad20f96c80882dc81abe77d9eb6d6fc8813ab990a8d95b63dc068d&=&format=webp&quality=lossless&width=634&height=1138"
                  alt="Map Example"
                  width={400}
                  height={400}
                />

                <h2 className="text-xl font-semibold mb-2 mt-2">
                  Map legend & context information:
                </h2>
                <h3 className="text-base font-normal">
                  - A building <a className="font-semibold">entrance</a> is
                  indicated by a <a className="font-semibold">black mark (-)</a>{" "}
                  on the building. In the example above, there are 2 entrances
                  to the highlighted building.
                </h3>
                <h3 className="text-base font-normal">
                  - <a className="font-semibold text-yellow-400">Roads</a> are
                  shaded <a className="font-semibold text-yellow-400">yellow</a>
                  .
                </h3>
                <h3 className="text-base font-normal">
                  -{" "}
                  <a className="font-semibold text-gray-400">
                    Other buildings and sites
                  </a>{" "}
                  are shaded in{" "}
                  <a className="font-semibold text-gray-400"> gray</a>.
                </h3>
                <h3 className="text-base font-normal">
                  - The scale bar indicates 30 meters (98 feet), which is
                  equivalent to the length of 3 school buses.
                </h3>
                <h3 className="text-base font-normal">
                  - The robot (not shown on the map) is typically about the same
                  size as a human or smaller.
                </h3>

                <h3 className="text-base font-normal mb-2 mt-2">
                  <a className="font-semibold">Note:</a> There could be{" "}
                  <a className="underline">more than one</a> way to describe a
                  location.
                </h3>
                <h3 className="text-base font-normal mb-2">
                  For example, in the above image, the person / object can be
                  described as{" "}
                  <a className="font-semibold">
                    {"“"}near{"”"}
                  </a>{" "}
                  the building, as well as{" "}
                  <a className="font-semibold">
                    {"“"}in front of{"”"}
                  </a>{" "}
                  the building. However, it cannot be described as{" "}
                  <a className="font-semibold">
                    {"“"}in,{"”"}
                  </a>{" "}
                  or{" "}
                  <a className="font-semibold">
                    {"“"}far from{"”"}
                  </a>{" "}
                  the building. Therefore, please answer{" "}
                  <a className="font-semibold">
                    {"“"}Yes{"”"}
                  </a>{" "}
                  for <a className="underline">both</a>{" "}
                  <a className="font-semibold">
                    {"“"}
                    near{"”"}
                  </a>{" "}
                  and{""}{" "}
                  <a className="font-semibold">
                    {"“"}in front of,{"”"}
                  </a>{" "}
                  and answer{" "}
                  <a className="font-semibold">
                    {"“"}No{"”"}
                  </a>{" "}
                  for{" "}
                  <a className="font-semibold">
                    {"“"}in{"”"}
                  </a>{" "}
                  and{" "}
                  <a className="font-semibold">
                    {"“"}far from.{"”"}
                  </a>
                </h3>

                <h3 className="text-base font-normal">
                  <a className="font-semibold ">More examples:</a>
                </h3>
                <h3 className="text-base font-normal ml-4">
                  1. In this example, the person / object can be described as{" "}
                  <a className="font-semibold">
                    {"“"}
                    near{"”"}
                  </a>{" "}
                  as well as{" "}
                  <a className="font-semibold">
                    {"“"}in front of{"”"}
                  </a>{" "}
                  the building.
                </h3>
                <h3 className="text-base font-normal ml-4 text-indigo-600">
                  <a className="underline">Explanation</a>: To determine if a
                  person / object is{" "}
                  <a className="font-semibold">
                    {"“"}in front of{"”"}
                  </a>{" "}
                  or{" "}
                  <a className="font-semibold">
                    {"“"}
                    behind{"”"}
                  </a>{" "}
                  a building, we usually consider their location relative to the{" "}
                  <a className="font-semibold">entrances</a> of the building.
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1157237162572525598/y03Yrv5klKQYDZ0P1JTdjTVb1knIjI83RbOKaB9XtGzKabFLr6rLA-SyLcmnbEnVCPTN4jL64kmN8MMs8kspPpz_ZfhC0Oj8ExO9Qc52gXFfxNnNLDt9RHkYQEzK.png?ex=65ead097&is=65d85b97&hm=8afd8ee52e1e6ec6cd16b618ba4e1e0164898d5a65c60e8c78d3a596bcab17df&=&format=webp&quality=lossless&width=446&height=700"
                  alt="Map Example"
                  width={400}
                  height={400}
                />

                <h3 className="text-base font-normal ml-4 mt-2">
                  2. In this example, the person / object can only be described
                  as{" "}
                  <a className="font-semibold">
                    {"“"}far from{"”"}
                  </a>{" "}
                  the building.
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1150761986729197628/image.png?ex=65e5b71d&is=65d3421d&hm=3df1b4b24372f1f20b21abd7dba70e5978e4cde6a306bf096cd146cd882431f2&=&format=webp&quality=lossless&width=730&height=1138"
                  alt="Map Example"
                  width={400}
                  height={400}
                />

                <h3 className="text-base font-normal ml-4 mt-2">
                  3. In this example, the person / object can be described as{" "}
                  <a className="font-semibold">
                    {"“"}in{"”"}
                  </a>{" "}
                  the building.
                </h3>
                <h3 className="text-base font-normal ml-4 text-indigo-600">
                  <a className="underline">Explanation</a>: We usually describe
                  the subject as{" "}
                  <a className="font-semibold">
                    {"“"}near{"”"}
                  </a>{" "}
                  the building{" "}
                  <a className="font-semibold">
                    only if they are {"“"}outside{"”"}
                  </a>{" "}
                  the building itself. Therefore, we answer{" "}
                  <a className="font-semibold">
                    {"“"}No{"”"}
                  </a>{" "}
                  for{" "}
                  <a className="font-semibold">
                    {"“"}near.{"”"}
                  </a>
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1150762323624079443/image.png?ex=65e5b76e&is=65d3426e&hm=c9eaaac93c094c440627785f85aa5b62d889b5ceda5bcd1c065c08208ad5af02&=&format=webp&quality=lossless&width=730&height=1138"
                  alt="Map Example"
                  width={400}
                  height={400}
                />

                <h3 className="text-base font-normal ml-4 mt-2">
                  4. In this example, the person / object can only be described
                  as{" "}
                  <a className="font-semibold">
                    {"“"}near{"”"}
                  </a>{" "}
                  the building.
                </h3>
                <h3 className="text-base font-normal ml-4 text-indigo-600">
                  <a className="underline">Explanation</a>: Judging by the
                  location of the building’s{" "}
                  <a className="font-semibold">entrance,</a> the person / object
                  is{" "}
                  <a className="font-semibold">
                    {"“"}behind{"”"}
                  </a>
                  the building. Therefore, we answer{" "}
                  <a className="font-semibold">
                    {"“"}No{"”"}
                  </a>{" "}
                  for{" "}
                  <a className="font-semibold">
                    {"“"}in front of.{"”"}
                  </a>
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1157237226699227217/XAIGkSHabWn6DS-lCJMqesuDdsBTBzCWPRm3IYoXTE_tyjOAckguSN9so95QG7RHasXshJv22Yra3XIDRGwzZstKxbkMHS2iQIV5kAkJ9tvSDOXOaizUl0f1x9LV.png?ex=65ead0a7&is=65d85ba7&hm=2552a8e5a788dbfc59cc04304201fdf08441c335ea77ffe0afe4cf001b4f50b3&=&format=webp&quality=lossless&width=730&height=1138"
                  alt="Map Example"
                  width={400}
                  height={400}
                />
              </div>
            )}
          </div>

          {/* <div className="mb-2">
            <Button
              className="text-xl font-semibold border-none"
              onClick={handleSectionTwoClick}
            >
              II.{`)`} Navigating between Images{" "}
              {isSectionTwoOpen ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </Button>
            {isSectionTwoOpen && (
              <div className="ml-8">
                <h3 className="text-base font-normal mb-2">
                  Please read this instruction carefully.
                </h3>
                <h3 className="text-base font-normal">
                  You will be shown images of a map (example as shown below). In
                  each image, please determine if each spatial relation listed
                  correctly describes the location marked with a{" "}
                  <a className="font-semibold text-red-500">red dot</a> with
                  respect to the building highlighted in{" "}
                  <a className="font-semibold text-blue-400">blue</a>.
                </h3>
                <h3 className="text-base font-normal"></h3> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1144977533100638279/image.png?width=636&height=1064"
                  alt="Map Example"
                  width={400}
                  height={400}
                ></img>
                <div className="mb-2">
                  <h2 className="text-xl font-semibold mb-2">Map legend:</h2>
                  <h3 className="text-base font-normal">
                    - A building entrance is indicated by a{" "}
                    <a className="font-semibold">black mark (-)</a> on the
                    building. In the example above, there are 2 entrances to the
                    highlighted building.
                  </h3>
                  <h3 className="text-base font-normal">
                    - Roads are shaded{" "}
                    <a className="font-semibold text-yellow-400">yellow</a> .
                  </h3>
                  <h3 className="text-base font-normal">
                    - Other buildings and sites are shaded in{" "}
                    <a className="font-semibold text-gray-400"> gray</a> .
                  </h3>
                  <h3 className="text-base font-normal mb-2">
                    The map is 500 meters (about 547 yards) in both width and
                    height.
                  </h3>
                  <h3 className="text-base font-normal mb-2">
                    <a className="font-semibold">Note:</a> There could be{" "}
                    <a className="underline">more than one </a>way to describe a
                    location.
                  </h3>
                  <h3 className="text-base font-normal mb-2">
                    For example, in the above image, the location shown can be
                    described as{" "}
                    <a className="font-semibold">
                      {"“"}near{"”"}
                    </a>{" "}
                    the building, as well as{" "}
                    <a className="font-semibold">
                      {"“"}in front of{"”"}
                    </a>{" "}
                    the building. However, it cannot be described as{" "}
                    <a className="font-semibold">
                      {"“"}in{"”"}
                    </a>
                    , or{" "}
                    <a className="font-semibold">
                      {"“"}far from{"”"}
                    </a>{" "}
                    the building. Therefore, please answer{" "}
                    <a className="font-semibold">
                      {"“"}Yes{"”"}
                    </a>{" "}
                    for <a className="underline">both</a>{" "}
                    <a className="font-semibold">
                      {"“"}
                      near{"”"}
                    </a>{" "}
                    and{""}{" "}
                    <a className="font-semibold">
                      {"“"}in front of{" ”"}
                    </a>
                    , and answer{" "}
                    <a className="font-semibold">
                      {"“"}No{"”"}
                    </a>{" "}
                    for{" "}
                    <a className="font-semibold">
                      {"“"}in{"”"}
                    </a>{" "}
                    and{" "}
                    <a className="font-semibold">
                      {"“"}far from{"”"}.
                    </a>
                  </h3>
                  <h3 className="text-base font-normal mb-2">
                    More labeling examples:
                  </h3> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
                    src="https://media.discordapp.net/attachments/1133782115708833933/1145028141589471394/image.png?width=618&height=1064"
                    alt="Map Example"
                    width={400}
                    height={400}
                    className="mb-2"
                  ></img> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
                    src="https://media.discordapp.net/attachments/1133782115708833933/1145106308446552096/image.png?width=596&height=1046"
                    alt="Map Example"
                    width={400}
                    height={400}
                    className="mb-2"
                  ></img> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
                    src="https://cdn.discordapp.com/attachments/1133782115708833933/1146491104598949939/image.png"
                    alt="Map Example"
                    width={400}
                    height={400}
                    className="mb-2"
                  ></img> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* <img
                    src="https://media.discordapp.net/attachments/1133782115708833933/1145028887265427538/image.png?width=612&height=1064"
                    alt="Map Example"
                    width={400}
                    height={400}
                    className="mb-2"
                  ></img> */}
          {/* </div>
              </div>
            )}
          </div> */}

          <div className="mb-2">
            <Button
              className="text-xl font-semibold border-none"
              onClick={handleSectionThreeClick}
            >
              II.{`)`} Navigating between Images
              {isSectionThreeOpen ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </Button>
            {isSectionThreeOpen && (
              <div className="ml-8">
                <h3 className="text-base font-normal mb-2">
                  1. On the main page, <a className="font-semibold">click</a>{" "}
                  the “
                  <a className="font-semibold text-blue-500">Start labeling</a>”
                  button to start labeling.
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1145029781457469571/image.png?ex=65e35195&is=65d0dc95&hm=be23afcd14b9d770ff4a3a6220ff9d0aa480648004e89e333cc023c95feb93a2&=&format=webp&quality=lossless&width=554&height=700"
                  alt="Map Example"
                  width={400}
                  height={400}
                  className="mb-2"
                ></img>
                <h3 className="text-base font-normal mb-2">
                  2. For each image, after making Yes/No selections, click the{" "}
                  <a className="font-semibold">
                    {"“"}Submit{"”"}
                  </a>{" "}
                  button and it will automatically move to the next image.
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1148675244324823080/image.png?ex=65e75a2f&is=65d4e52f&hm=116cfeb2d4ad20f96c80882dc81abe77d9eb6d6fc8813ab990a8d95b63dc068d&=&format=webp&quality=lossless&width=634&height=1138"
                  alt="Map Example"
                  width={400}
                  height={400}
                  className="mb-2"
                ></img>
                <h3 className="text-base font-normal mb-2">
                  3. You can go back to the main page anytime by clicking the{" "}
                  <a className="font-semibold">
                    {"“"}Main Page{"”"}
                  </a>{" "}
                  button at the top left.
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1145030878402187344/image.png?ex=65e3529b&is=65d0dd9b&hm=8405cc8bb0b9b91fbb9836fffa925ff774b6a78e464b014a6f29960fd6f1e2f5&=&format=webp&quality=lossless&width=1996&height=560"
                  alt="Map Example"
                  width={400}
                  height={400}
                  className="mb-2"
                ></img>
                <h3 className="text-base font-normal mb-2">
                  4. On the main page, you can edit your previously submitted
                  answers by scrolling down to the{" "}
                  <a className="font-semibold">
                    {"“"}Labeled Data{"”"}
                  </a>{" "}
                  section to see all your submitted images. Click{" "}
                  <a className="font-semibold text-blue-500">
                    {"“"}Edit Label{"”"}
                  </a>{" "}
                  next to the image you want to edit.
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1145031538250104972/image.png?ex=65e35338&is=65d0de38&hm=5c081f5681abfaace71bbf4a90482bcc894d904ed89f764a83b053153ee65254&=&format=webp&quality=lossless&width=702&height=1138"
                  alt="Map Example"
                  width={400}
                  height={400}
                  className="mb-2"
                ></img>
                <h3 className="text-base font-normal mb-2">
                  5. Once you have labeled all the images, the “labeled” counter
                  on the top right of the screen will show {"“"}30/30{"”"}. Go
                  back to the main page and click the{" "}
                  <a className="font-semibold">
                    {"“"}Redeem Code{"”"}
                  </a>{" "}
                  button to receive the completion code for Prolific.
                </h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1145032104506294393/image.png?ex=65e353bf&is=65d0debf&hm=434354e1db40c327c23dc766df109194c38defcabe07b04288b5903b9fa5875d&=&format=webp&quality=lossless&width=1524&height=760"
                  alt="Map Example"
                  width={400}
                  height={400}
                  className="mb-2"
                ></img>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://media.discordapp.net/attachments/1133782115708833933/1145032162698076221/image.png?ex=65e353cd&is=65d0decd&hm=5b0dc8f611a2389287b3d7e8c2993f4a866a08c3839151511d0e5d1926379e0c&=&format=webp&quality=lossless&width=1100&height=516"
                  alt="Map Example"
                  width={400}
                  height={400}
                  className="mb-2"
                ></img>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default InstructionButton;
