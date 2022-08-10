/** aninote 1.1 - figma widget */
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

function Widget() {
  const [elementList, setElementList] = useSyncedState("", [
    {
      elementName: "",
      elementValue: "",
      attribute: [{ from: "", to: "", propertyName: "" }],
    },
  ]);

  const handleAddElementBlock = (index: number) => {
    const tempElementList = [...elementList];
    tempElementList.splice(index + 1, 0, {
      elementName: "",
      elementValue: "",
      attribute: [{ from: "", to: "", propertyName: "" }],
    });
    setElementList(tempElementList);
  };

  const handleRemoveElementBlock = (index: number) => {
    const tempElementList = [...elementList];
    tempElementList.splice(index, 1);
    setElementList(tempElementList);
  };

  const handleElementInput = (index: number, onTextEditEnd: any) => {
    console.log(index, onTextEditEnd);
    const tempElementList = [...elementList];
    tempElementList[index].elementValue = onTextEditEnd.characters;
    setElementList(tempElementList);
  };

  const addNewProperty = (index: number, attrIndex: number) => {
    const tempelementList = [...elementList];
    tempelementList[index].attribute.splice(attrIndex, 0, {
      from: "",
      to: "",
      propertyName: "",
    });
    setElementList(tempelementList);
  };

  return (
    <AutoLayout
      name="SequenceBlock"
      fill="#2B2B2B"
      cornerRadius={16}
      overflow="visible"
      direction="vertical"
      padding={20}
      width={300}
    >
      {elementList.map((elementBlock, index) => (
        <AutoLayout
          name="element-block"
          key={index}
          effect={{
            type: "inner-shadow",
            color: "#00000080",
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
            name="element-timeline"
            opacity={0.5}
            fill="#2B2B2B"
            overflow="visible"
            width={8}
            height="fill-parent"
          >
            <Frame name="v-line" stroke="#FFF" width={1} height="fill-parent" />
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
              name="element-title-block"
              fill="#232323"
              cornerRadius={4}
              overflow="visible"
              width="fill-parent"
            >
              <AutoLayout
                name="element-add-handler"
                onClick={() => handleAddElementBlock(index)}
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
                  stroke="#8981F7"
                  cornerRadius={14}
                  width={16}
                  height={16}
                >
                  <SVG
                    name="icon-add"
                    x={4}
                    y={4}
                    height={8}
                    width={8}
                    src="<svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M3 1C3 0.447715 3.44772 0 4 0C4.55228 0 5 0.447715 5 1V7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7V1Z' fill='#8981F7' fill-opacity='1'/>
      <path d='M1 5C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3H7C7.55228 3 8 3.44772 8 4C8 4.55228 7.55228 5 7 5H1Z' fill='#8981F7' fill-opacity='1'/>
      </svg>
      "
                  />
                </Frame>
              </AutoLayout>
              <Input
                value={elementBlock.elementValue}
                onTextEditEnd={(event) => handleElementInput(index, event)}
                placeholder="element-name"
                fontSize={12}
                fill="#8981F7"
                lineHeight={20}
                width={"fill-parent"}
                inputFrameProps={{
                  cornerRadius: 4,
                  padding: {
                    vertical: 2,
                    horizontal: 8,
                  },
                }}
                inputBehavior="wrap"
              />
              {elementList.length > 1 && (
                <AutoLayout
                  onClick={() => handleRemoveElementBlock(index)}
                  hoverStyle={{
                    opacity: 1,
                  }}
                  opacity={0.5}
                  cornerRadius={4}
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
            {elementBlock.attribute.map((attr, attrIndex) => {
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
                    opacity={0.5}
                    x={-44}
                    y={4}
                    positioning="absolute"
                    overflow="visible"
                    horizontalAlignItems="center"
                    verticalAlignItems="center"
                    onClick={() => {
                      addNewProperty(index, attrIndex);
                    }}
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
                      value={attr.propertyName}
                      onTextEditEnd={(e) => {
                        e.characters;
                        const tempElementList = [...elementList];
                        tempElementList[index].attribute[
                          attrIndex
                        ].propertyName = e.characters;
                        setElementList(tempElementList);
                      }}
                      placeholder="property-name"
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
                    <AutoLayout
                      name="property-remove-handler"
                      cornerRadius={8}
                      overflow="visible"
                      spacing={8}
                      padding={4}
                    >
                      <Frame
                        name="icon-remove"
                        opacity={0.5}
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
                        name="from-input"
                        fill="#1D1D1D99"
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
                          name="from-input-value"
                          value={attr.from}
                          onTextEditEnd={(e) => {
                            e.characters;
                            const tempElementList = [...elementList];
                            tempElementList[index].attribute[attrIndex].from =
                              e.characters;
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
                        name="to-input"
                        fill="#1D1D1D99"
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
                          name="to-input-value"
                          value={attr.to}
                          onTextEditEnd={(e) => {
                            e.characters;
                            const tempElementList = [...elementList];
                            tempElementList[index].attribute[attrIndex].to =
                              e.characters;
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
                  </AutoLayout>
                </AutoLayout>
              );
            })}
          </AutoLayout>
        </AutoLayout>
      ))}
    </AutoLayout>
  );
}
widget.register(Widget);
