/** aninote 1.0 - figma widget */
/** aninote is an animation annotation widget for figma  */
/** created by popmelt */
/** published 09.06.2022 */

const { widget } = figma;
const {
  AutoLayout,
  Ellipse,
  Frame,
  Image,
  Rectangle,
  SVG,
  Text,
  useSyncedState,
  Input,
} = widget;

function Aninote() {
  const [open, setOpen] = useSyncedState("open", true);

  const [eventTitleInput, setEventTitleInput] = useSyncedState(
    "event-title-input",
    ""
  );

  const [startInput, setStartInput] = useSyncedState("start-input", "");

  const [finishInput, setFinishInput] = useSyncedState("finish-input", "");

  const [elementList, setElementList] = useSyncedState("", [
    {
      elementBlock: "",
      elementName: "",
      propertyBlock: [
        {
          propertyName: "",
          fromValue: "",
          toValue: "",
          durationValue: "",
          delayValue: "",
          easeValue: "",
        },
      ],
    },
  ]);

  const handleAddElementBlock = (index: number) => {
    const tempElementList = [...elementList];
    tempElementList.splice(index + 1, 0, {
      elementBlock: "",
      elementName: "",
      propertyBlock: [
        {
          propertyName: "",
          fromValue: "",
          toValue: "",
          durationValue: "",
          delayValue: "",
          easeValue: "",
        },
      ],
    });
    setElementList(tempElementList);
  };

  const handleRemoveElementBlock = (index: number) => {
    const list = [...elementList];
    list.splice(index, 1);
    setElementList(list);
  };

  const handleElementInput = (index: number, onTextEditEnd: any) => {
    const tempElementList = [...elementList];
    tempElementList[index].elementName = onTextEditEnd.characters;
    setElementList(tempElementList);
  };

  const handleAddPropertyBlock = (index: number, propertyIndex: number) => {
    const tempElementList = [...elementList];
    tempElementList[index].propertyBlock.splice(propertyIndex + 1, 0, {
      propertyName: "",
      fromValue: "",
      toValue: "",
      durationValue: "",
      delayValue: "",
      easeValue: "",
    });
    setElementList(tempElementList);
  };

  const handleRemovePropertyBlock = (index: number, propertyIndex: number) => {
    const tempElementList = [...elementList];
    tempElementList[index].propertyBlock.splice(index, 1);
    setElementList(tempElementList);
  };

  return (
    <AutoLayout
      name="Aninote"
      overflow="visible"
      direction="horizontal"
      spacing={8}
    >
      <Frame
        name="expand-handler"
        onClick={() => {
          setOpen(!open);
        }}
        fill="#8981F7"
        cornerRadius={{
          topLeft: 0,
          topRight: 16,
          bottomRight: 16,
          bottomLeft: 16,
        }}
        overflow="visible"
        width={48}
        height={48}
      >
        <AutoLayout
          name="icon-expand"
          hidden={open}
          x={14}
          y={14}
          fill="#8981F7"
          overflow="visible"
          direction="vertical"
          width={20}
          height={20}
          verticalAlignItems="center"
          horizontalAlignItems="center"
        >
          <SVG
            name="vector"
            height={18}
            width={11}
            src="<svg width='12' height='18' viewBox='0 0 12 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M5.55023 0.0502625H0.550232L2.55023 2.05026H5.55023V14.1716L2.96447 11.5858L1.55025 13L5.08579 16.5355L6.5 17.9498L7.91421 16.5355L11.4497 13L10.0355 11.5858L7.55023 14.0711V2.05026V0.0502625H5.55023Z' fill='#2B2B2B'/>
</svg>
"
          />
        </AutoLayout>
        <AutoLayout
          name="icon-collapse"
          hidden={!open}
          x={14}
          y={14}
          fill="#8981F7"
          overflow="visible"
          direction="vertical"
          width={20}
          height={20}
          verticalAlignItems="center"
          horizontalAlignItems="center"
        >
          <SVG
            name="vector"
            height={11}
            width={18}
            src="<svg width='18' height='12' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M11.5858 1.91422L13 0.5L16.5355 4.03554L17.9498 5.44975L16.5355 6.86396L13 10.3995L11.5858 8.98528L14.0711 6.50001H2.05026V9.50001L0.0502625 11.5V6.50001V4.50001H2.05026H14.1716L11.5858 1.91422Z' fill='#2B2B2B'/>
</svg>
"
          />
        </AutoLayout>
      </Frame>
      <AutoLayout
        name="notepad"
        effect={{
          type: "drop-shadow",
          color: "#0000001A",
          offset: {
            x: 8,
            y: 4,
          },
          blur: 20,
          showShadowBehindNode: false,
        }}
        x={56}
        fill="#2B2B2B"
        stroke={open ? "#2B2B2B" : "#2B2B2B"}
        cornerRadius={16}
        overflow="visible"
        direction="vertical"
        spacing={8}
        padding={
          open
            ? { vertical: 10, horizontal: 12 }
            : { vertical: 7, horizontal: 12 }
        }
        width={380}
      >
        <AutoLayout
          name="event-title-block"
          overflow="visible"
          width="fill-parent"
        >
          <Input
            name="event-title-input"
            value={eventTitleInput}
            onTextEditEnd={(e) => {
              setEventTitleInput(e.characters);
            }}
            placeholder="onEvent - Lorem Ipsum Dolor"
            fill="#EEE"
            width={"fill-parent"}
            fontSize={15}
            lineHeight={22}
            fontWeight={500}
            inputFrameProps={{
              padding: {
                vertical: 6,
                horizontal: 8,
              },
            }}
            inputBehavior="wrap"
          />
        </AutoLayout>
        <AutoLayout
          name="sequence-block"
          hidden={!open}
          effect={{
            type: "inner-shadow",
            color: "#1D1D1DCC",
            offset: {
              x: 0,
              y: 1,
            },
            blur: 0,
          }}
          fill="#2B2B2B"
          overflow="visible"
          direction="vertical"
          padding={{
            top: 16,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          width="fill-parent"
        >
          <AutoLayout
            name="start-block"
            effect={{
              type: "inner-shadow",
              color: "#1D1D1DCC",
              offset: {
                x: 0,
                y: -1,
              },
              blur: 0,
            }}
            fill="#2B2B2B"
            overflow="visible"
            spacing={12}
            padding={{
              top: 0,
              right: 8,
              bottom: 0,
              left: 24,
            }}
            width="fill-parent"
          >
            <AutoLayout
              name="start-timeline"
              opacity={0.25}
              overflow="visible"
              padding={{
                top: 8,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              width={8}
              height="fill-parent"
            >
              <Frame
                name="v-line"
                stroke="#FFF"
                width={1}
                height="fill-parent"
              />
              <AutoLayout
                name="h-line-padding"
                overflow="visible"
                direction="vertical"
                verticalAlignItems="center"
              >
                <Frame
                  name="h-line"
                  stroke="#FFF"
                  rotation={90}
                  width={1}
                  height={7}
                />
              </AutoLayout>
            </AutoLayout>
            <AutoLayout
              name="start-block"
              overflow="visible"
              direction="vertical"
              spacing={4}
              padding={{
                top: 0,
                right: 0,
                bottom: 16,
                left: 0,
              }}
              width="fill-parent"
            >
              <AutoLayout
                name="start-label"
                overflow="visible"
                width="fill-parent"
              >
                <Text
                  name="Start:"
                  fill="#AAA"
                  lineHeight={20}
                  fontFamily="Inter"
                  fontSize={12}
                  italic={true}
                  fontWeight={500}
                >
                  Start:
                </Text>
              </AutoLayout>
              <Input
                name="start-input"
                value={startInput}
                onTextEditEnd={(e) => {
                  setStartInput(e.characters);
                }}
                placeholder="when lorem ipsum..."
                fill="#EEE"
                width={"fill-parent"}
                fontSize={12}
                lineHeight={20}
                fontWeight={500}
                inputFrameProps={{
                  padding: { vertical: 4, horizontal: 8 },
                  fill: "#232323",
                  cornerRadius: 6,
                }}
                inputBehavior="wrap"
              />
            </AutoLayout>
          </AutoLayout>
          {elementList.map((elementBlock, index) => (
            <AutoLayout
              name="element-block"
              key={index}
              effect={{
                type: "inner-shadow",
                color: "#1D1D1DCC",
                offset: {
                  x: 0,
                  y: -1,
                },
                blur: 0,
              }}
              fill="#2B2B2B"
              overflow="visible"
              spacing={12}
              padding={{
                top: 0,
                right: 8,
                bottom: 0,
                left: 24,
              }}
              width="fill-parent"
            >
              <AutoLayout
                name="element-add-handler"
                onClick={() => handleAddElementBlock(index)}
                hoverStyle={{
                  opacity: 1,
                }}
                opacity={0.5}
                y={20}
                positioning="absolute"
                overflow="visible"
                horizontalAlignItems="center"
                verticalAlignItems="center"
              >
                <Frame
                  name="icon-add"
                  stroke="#8981F7"
                  cornerRadius={14}
                  width={16}
                  height={16}
                >
                  <SVG
                    name="icon-plus"
                    x={4}
                    y={4}
                    height={8}
                    width={8}
                    src="<svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M3 7C3 7.55228 3.44772 8 4 8C4.55228 8 5 7.55228 5 7V5H7C7.55228 5 8 4.55228 8 4C8 3.44772 7.55228 3 7 3H5V1C5 0.447715 4.55228 0 4 0C3.44772 0 3 0.447715 3 1V3H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5H3V7Z' fill='#8981F7'/>
</svg>
"
                  />
                </Frame>
              </AutoLayout>
              <AutoLayout
                name="element-timeline"
                opacity={0.25}
                fill="#2B2B2B"
                overflow="visible"
                width={8}
                height="fill-parent"
              >
                <Frame
                  name="v-line"
                  stroke="#FFF"
                  width={1}
                  height="fill-parent"
                />
                <AutoLayout
                  name="h-line-padding"
                  overflow="visible"
                  direction="vertical"
                  padding={{
                    vertical: 27,
                    horizontal: 0,
                  }}
                  verticalAlignItems="center"
                >
                  <Frame
                    name="h-line"
                    stroke="#FFF"
                    rotation={90}
                    width={1}
                    height={7}
                  />
                </AutoLayout>
              </AutoLayout>
              <AutoLayout
                name="element-body-block"
                overflow="visible"
                direction="vertical"
                spacing={8}
                padding={{
                  vertical: 16,
                  horizontal: 0,
                }}
                width="fill-parent"
              >
                <AutoLayout
                  name="element-name-block"
                  fill="#1D1D1D99"
                  cornerRadius={6}
                  overflow="visible"
                  width="fill-parent"
                >
                  <Input
                    name="element-name-input"
                    value={elementBlock.elementName}
                    onTextEditEnd={(event) => handleElementInput(index, event)}
                    placeholder="element-name"
                    fill="#8981F7"
                    width={"fill-parent"}
                    fontSize={12}
                    lineHeight={20}
                    fontWeight={500}
                    inputFrameProps={{
                      padding: { vertical: 2, horizontal: 8 },
                      fill: "#232323",
                      cornerRadius: 8,
                    }}
                    inputBehavior="wrap"
                  />
                  {elementList.length > 1 && (
                    <AutoLayout
                      name="element-remove-handler"
                      onClick={() => handleRemoveElementBlock(index)}
                      hoverStyle={{
                        opacity: 1,
                      }}
                      opacity={0.5}
                      cornerRadius={8}
                      overflow="visible"
                      spacing={8}
                      padding={4}
                    >
                      <Frame
                        name="icon-remove"
                        stroke="#8981F7"
                        cornerRadius={14}
                        width={16}
                        height={16}
                      >
                        <Rectangle
                          name="icon-minus"
                          x={4}
                          y={9}
                          fill="#8981F7"
                          cornerRadius={4}
                          rotation={90}
                          width={2}
                          height={8}
                        />
                      </Frame>
                    </AutoLayout>
                  )}
                </AutoLayout>
                {elementBlock.propertyBlock.map(
                  (propertyBlock, propertyIndex) => {
                    return (
                      <AutoLayout
                        name="property-block"
                        overflow="visible"
                        direction="vertical"
                        spacing={4}
                        width="fill-parent"
                      >
                        <AutoLayout
                          name="property-add-handler"
                          onClick={() => {
                            handleAddPropertyBlock(index, propertyIndex);
                          }}
                          hoverStyle={{
                            opacity: 1,
                          }}
                          opacity={0.5}
                          x={-44}
                          y={4}
                          positioning="absolute"
                          overflow="visible"
                          horizontalAlignItems="center"
                          verticalAlignItems="center"
                        >
                          <Frame
                            name="icon-add"
                            stroke="#AAA"
                            cornerRadius={14}
                            width={16}
                            height={16}
                          >
                            <SVG
                              name="icon-plus"
                              x={4}
                              y={4}
                              height={8}
                              width={8}
                              src="<svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <path fill-rule='evenodd' clip-rule='evenodd' d='M3 7C3 7.55228 3.44772 8 4 8C4.55228 8 5 7.55228 5 7V5H7C7.55228 5 8 4.55228 8 4C8 3.44772 7.55228 3 7 3H5V1C5 0.447715 4.55228 0 4 0C3.44772 0 3 0.447715 3 1V3H1C0.447715 3 0 3.44772 0 4C0 4.55228 0.447715 5 1 5H3V7Z' fill='#AAAAAA'/>
  </svg>
  "
                            />
                          </Frame>
                        </AutoLayout>
                        <AutoLayout
                          name="property-title-block"
                          fill="#232323"
                          cornerRadius={6}
                          overflow="visible"
                          width="fill-parent"
                        >
                          <Input
                            name="property-input"
                            value={propertyBlock.propertyName}
                            onTextEditEnd={(e) => {
                              const tempElementList = [...elementList];
                              tempElementList[index].propertyBlock[
                                propertyIndex
                              ].propertyName = e.characters;
                              setElementList(tempElementList);
                            }}
                            placeholder="style-property"
                            fill="#EEE"
                            width={"fill-parent"}
                            fontSize={12}
                            lineHeight={20}
                            fontWeight={500}
                            inputFrameProps={{
                              padding: { vertical: 2, horizontal: 8 },
                              fill: "#232323",
                              cornerRadius: 8,
                            }}
                            inputBehavior="wrap"
                          />
                          {elementList[index].propertyBlock.length > 1 && (
                            <AutoLayout
                              name="property-remove-handler"
                              onClick={() => {
                                handleRemovePropertyBlock(index, propertyIndex);
                              }}
                              hoverStyle={{
                                opacity: 1,
                              }}
                              opacity={0.5}
                              cornerRadius={8}
                              overflow="visible"
                              spacing={8}
                              padding={4}
                            >
                              <Frame
                                name="icon-remove"
                                stroke="#AAA"
                                cornerRadius={14}
                                width={16}
                                height={16}
                              >
                                <Rectangle
                                  name="icon-minus"
                                  x={4}
                                  y={9}
                                  fill="#AAA"
                                  cornerRadius={4}
                                  rotation={90}
                                  width={2}
                                  height={8}
                                />
                              </Frame>
                            </AutoLayout>
                          )}
                        </AutoLayout>
                        <AutoLayout
                          name="property-value-block"
                          overflow="visible"
                          direction="vertical"
                          spacing={4}
                          padding={{
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 18,
                          }}
                          width="fill-parent"
                        >
                          <AutoLayout
                            name="from-block"
                            overflow="visible"
                            spacing={4}
                            width="fill-parent"
                            verticalAlignItems="center"
                          >
                            <AutoLayout
                              name="from-label"
                              overflow="visible"
                              spacing={8}
                            >
                              <Text
                                name="from:"
                                fill="#AAA"
                                lineHeight={20}
                                fontFamily="Inter"
                                fontSize={12}
                                italic={true}
                                fontWeight={500}
                              >
                                from:
                              </Text>
                            </AutoLayout>
                            <AutoLayout
                              name="from-input-frame"
                              fill="#232323"
                              cornerRadius={6}
                              overflow="visible"
                              spacing={8}
                              padding={{
                                vertical: 2,
                                horizontal: 8,
                              }}
                              width="fill-parent"
                              verticalAlignItems="center"
                            >
                              <Input
                                name="from-input"
                                value={propertyBlock.fromValue}
                                onTextEditEnd={(e) => {
                                  const tempElementList = [...elementList];
                                  tempElementList[index].propertyBlock[
                                    propertyIndex
                                  ].fromValue = e.characters;
                                  setElementList(tempElementList);
                                }}
                                placeholder="0"
                                fill="#EEE"
                                width={"fill-parent"}
                                fontSize={12}
                                lineHeight={20}
                                fontWeight={500}
                                inputBehavior="wrap"
                              />
                            </AutoLayout>
                          </AutoLayout>
                          <AutoLayout
                            name="to-block"
                            overflow="visible"
                            spacing={4}
                            width="fill-parent"
                            verticalAlignItems="center"
                          >
                            <AutoLayout
                              name="to-label"
                              overflow="visible"
                              spacing={8}
                            >
                              <Text
                                name="to:"
                                fill="#AAA"
                                lineHeight={20}
                                fontFamily="Inter"
                                fontSize={12}
                                italic={true}
                                fontWeight={500}
                              >
                                to:
                              </Text>
                            </AutoLayout>
                            <AutoLayout
                              name="to-input-frame"
                              fill="#232323"
                              cornerRadius={6}
                              overflow="visible"
                              spacing={8}
                              padding={{
                                vertical: 2,
                                horizontal: 8,
                              }}
                              width="fill-parent"
                              verticalAlignItems="center"
                            >
                              <Input
                                name="to-input"
                                value={propertyBlock.toValue}
                                onTextEditEnd={(e) => {
                                  const tempElementList = [...elementList];
                                  tempElementList[index].propertyBlock[
                                    propertyIndex
                                  ].toValue = e.characters;
                                  setElementList(tempElementList);
                                }}
                                placeholder="100"
                                fill="#EEE"
                                width={"fill-parent"}
                                fontSize={12}
                                lineHeight={20}
                                fontWeight={500}
                                inputBehavior="wrap"
                              />
                            </AutoLayout>
                          </AutoLayout>
                          <AutoLayout
                            name="duration-block"
                            overflow="visible"
                            spacing={4}
                            width="fill-parent"
                            verticalAlignItems="center"
                          >
                            <AutoLayout
                              name="duration-label"
                              overflow="visible"
                              spacing={8}
                            >
                              <Text
                                name="duration:"
                                fill="#AAA"
                                lineHeight={20}
                                fontFamily="Inter"
                                fontSize={12}
                                italic={true}
                                fontWeight={500}
                              >
                                duration:
                              </Text>
                            </AutoLayout>
                            <AutoLayout
                              name="duration-input-frame"
                              fill="#232323"
                              cornerRadius={6}
                              overflow="visible"
                              spacing={8}
                              padding={{
                                vertical: 2,
                                horizontal: 8,
                              }}
                              width="fill-parent"
                              verticalAlignItems="center"
                            >
                              <Input
                                name="durate-input"
                                value={propertyBlock.durationValue}
                                onTextEditEnd={(e) => {
                                  const tempElementList = [...elementList];
                                  tempElementList[index].propertyBlock[
                                    propertyIndex
                                  ].durationValue = e.characters;
                                  setElementList(tempElementList);
                                }}
                                placeholder="0"
                                fill="#EEE"
                                width={"fill-parent"}
                                fontSize={12}
                                lineHeight={20}
                                fontWeight={500}
                                inputBehavior="wrap"
                              />
                            </AutoLayout>
                          </AutoLayout>
                          <AutoLayout
                            name="delay-block"
                            overflow="visible"
                            spacing={4}
                            width="fill-parent"
                            verticalAlignItems="center"
                          >
                            <AutoLayout
                              name="delay-label"
                              overflow="visible"
                              spacing={8}
                            >
                              <Text
                                name="delay:"
                                fill="#AAA"
                                lineHeight={20}
                                fontFamily="Inter"
                                fontSize={12}
                                italic={true}
                                fontWeight={500}
                              >
                                delay:
                              </Text>
                            </AutoLayout>
                            <AutoLayout
                              name="delay-input-frame"
                              fill="#232323"
                              cornerRadius={6}
                              overflow="visible"
                              spacing={8}
                              padding={{
                                vertical: 2,
                                horizontal: 8,
                              }}
                              width="fill-parent"
                              verticalAlignItems="center"
                            >
                              <Input
                                name="delay-input"
                                value={propertyBlock.delayValue}
                                onTextEditEnd={(e) => {
                                  const tempElementList = [...elementList];
                                  tempElementList[index].propertyBlock[
                                    propertyIndex
                                  ].delayValue = e.characters;
                                  setElementList(tempElementList);
                                }}
                                placeholder="0"
                                fill="#EEE"
                                width={"fill-parent"}
                                fontSize={12}
                                lineHeight={20}
                                fontWeight={500}
                                inputBehavior="wrap"
                              />
                            </AutoLayout>
                          </AutoLayout>
                          <AutoLayout
                            name="ease-block"
                            overflow="visible"
                            spacing={4}
                            width="fill-parent"
                            verticalAlignItems="center"
                          >
                            <AutoLayout
                              name="ease-label"
                              overflow="visible"
                              spacing={8}
                            >
                              <Text
                                name="ease:"
                                fill="#AAA"
                                lineHeight={20}
                                fontFamily="Inter"
                                fontSize={12}
                                italic={true}
                                fontWeight={500}
                              >
                                ease:
                              </Text>
                            </AutoLayout>
                            <AutoLayout
                              name="ease-input-frame"
                              fill="#232323"
                              cornerRadius={6}
                              overflow="visible"
                              spacing={8}
                              padding={{
                                vertical: 2,
                                horizontal: 8,
                              }}
                              width="fill-parent"
                              verticalAlignItems="center"
                            >
                              <Input
                                name="ease-input"
                                value={propertyBlock.easeValue}
                                onTextEditEnd={(e) => {
                                  const tempElementList = [...elementList];
                                  tempElementList[index].propertyBlock[
                                    propertyIndex
                                  ].easeValue = e.characters;
                                  setElementList(tempElementList);
                                }}
                                placeholder="linear"
                                fill="#EEE"
                                width={"fill-parent"}
                                fontSize={12}
                                lineHeight={20}
                                fontWeight={500}
                                inputBehavior="wrap"
                              />
                            </AutoLayout>
                          </AutoLayout>
                        </AutoLayout>
                      </AutoLayout>
                    );
                  }
                )}
              </AutoLayout>
            </AutoLayout>
          ))}

          <AutoLayout
            name="finish-block"
            effect={{
              type: "inner-shadow",
              color: "#1D1D1DCC",
              offset: {
                x: 0,
                y: -1,
              },
              blur: 0,
            }}
            fill="#2B2B2B"
            overflow="visible"
            spacing={12}
            padding={{
              top: 0,
              right: 8,
              bottom: 0,
              left: 24,
            }}
            width="fill-parent"
          >
            <AutoLayout
              name="timeline-line-finish"
              opacity={0.25}
              overflow="visible"
              verticalAlignItems="end"
            >
              <Frame name="v-line" stroke="#FFF" width={1} height={27} />
              <AutoLayout
                name="h-line-padding"
                overflow="visible"
                direction="vertical"
                verticalAlignItems="end"
              >
                <Frame
                  name="line-h"
                  stroke="#FFF"
                  rotation={90}
                  width={1}
                  height={7}
                />
              </AutoLayout>
            </AutoLayout>
            <AutoLayout
              name="finish-text-block"
              overflow="visible"
              direction="vertical"
              spacing={4}
              padding={{
                vertical: 16,
                horizontal: 0,
              }}
              width="fill-parent"
            >
              <AutoLayout
                name="finish-label"
                overflow="visible"
                spacing={8}
                width="fill-parent"
              >
                <Text
                  name="Finish:"
                  fill="#AAA"
                  lineHeight={20}
                  fontFamily="Inter"
                  fontSize={12}
                  italic={true}
                  fontWeight={500}
                >
                  Finish:
                </Text>
              </AutoLayout>
              <Input
                name="finish-input"
                value={finishInput}
                onTextEditEnd={(e) => {
                  setFinishInput(e.characters);
                }}
                placeholder="when lorem ipsum..."
                fill="#EEE"
                width={"fill-parent"}
                fontSize={12}
                lineHeight={20}
                fontWeight={500}
                inputFrameProps={{
                  padding: { vertical: 4, horizontal: 8 },
                  fill: "#232323",
                  cornerRadius: 6,
                }}
                inputBehavior="wrap"
              />
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}
widget.register(Aninote);
