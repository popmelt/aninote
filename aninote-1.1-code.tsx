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
      <AutoLayout
        name="element-block"
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
            fill="#1D1D1D"
            cornerRadius={4}
            overflow="visible"
            width="fill-parent"
          >
            <AutoLayout
              name="element-add-handler"
              x={-44}
              y={4}
              positioning="absolute"
              overflow="visible"
              horizontalAlignItems="center"
              verticalAlignItems="center"
            >
              <Frame
                name="icon-add"
                stroke="#8981F780"
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
<path d='M3 1C3 0.447715 3.44772 0 4 0C4.55228 0 5 0.447715 5 1V7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7V1Z' fill='#8981F7' fill-opacity='0.5'/>
<path d='M1 5C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3H7C7.55228 3 8 3.44772 8 4C8 4.55228 7.55228 5 7 5H1Z' fill='#8981F7' fill-opacity='0.5'/>
</svg>
"
                />
              </Frame>
            </AutoLayout>
            <AutoLayout
              name="element-input"
              fill="#1D1D1D"
              cornerRadius={4}
              overflow="visible"
              spacing={8}
              padding={{
                vertical: 2,
                horizontal: 8,
              }}
              width="fill-parent"
            >
              <Text
                name="element-name"
                fill="#8981F7"
                width="fill-parent"
                lineHeight={20}
                fontFamily="Inter"
                fontSize={12}
                fontWeight={500}
              >
                element-name
              </Text>
            </AutoLayout>
            <AutoLayout
              name="element-remove-handler"
              fill="#1D1D1D"
              cornerRadius={4}
              overflow="visible"
              spacing={8}
              padding={4}
            >
              <Frame
                name="icon-remove"
                stroke="#8981F780"
                cornerRadius={14}
                width={16}
                height={16}
              >
                <Rectangle
                  name="icon-minus"
                  x={4}
                  y={9}
                  fill="#8981F780"
                  cornerRadius={4}
                  rotation={90}
                  width={2}
                  height={8}
                />
              </Frame>
            </AutoLayout>
          </AutoLayout>
          <AutoLayout
            name="attribute-block"
            fill="#2B2B2B"
            stroke="#000"
            cornerRadius={4}
            overflow="visible"
            direction="vertical"
            spacing={4}
            width="fill-parent"
            height={40}
            strokeDashPattern={[4, 4]}
          />
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}
widget.register(Widget);
