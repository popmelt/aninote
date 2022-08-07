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

function AnimationAnnotationWidget() {
  const [open, setOpen] = useSyncedState("open", true);
  const [eventTitleText, setEventTitleText] = useSyncedState(
    "event-title-text",
    ""
  );
  const [startTextInput, setStartTextInput] = useSyncedState(
    "start-text-input",
    ""
  );
  const [elementInput, setElementInput] = useSyncedState("element-input", "");
  const [attributeInput, setAttributeInput] = useSyncedState(
    "attribute-input",
    ""
  );
  const [valueFromInput, setValueFromInput] = useSyncedState(
    "value-from-input",
    ""
  );
  const [valueToInput, setValueToInput] = useSyncedState("value-to-input", "");
  const [valueDurationInput, setValueDurationInput] = useSyncedState(
    "value-duration-input",
    ""
  );
  const [valueDelayInput, setValueDelayInput] = useSyncedState(
    "value-delay-input",
    ""
  );
  const [valueEaseInput, setValueEaseInput] = useSyncedState(
    "value-ease-input",
    ""
  );
  const [finishTextInput, setFinishTextInput] = useSyncedState(
    "finish-text-input",
    ""
  );

  return (
    <AutoLayout
      name="AnimationAnnotationWidget"
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
      fill={open ? "#2B2B2B" : "#6D66CA"}
      stroke="#00000080"
      cornerRadius={16}
      overflow="visible"
      direction="vertical"
      spacing={16}
      padding={{
        top: 16,
        right: 20,
        bottom: 16,
        left: 20,
      }}
      width={400}
    >
      <AutoLayout
        name="event-title-block"
        cornerRadius={8}
        overflow="visible"
        spacing={8}
        padding={{
          vertical: 4,
          horizontal: 0,
        }}
        width="fill-parent"
        verticalAlignItems="center"
      >
        <Frame
          name="action-open"
          onClick={() => {
            setOpen(!open);
          }}
          width={14}
          height={14}
        >
          <SVG
            name="icon-collapse"
            y={{
              type: "center",
              offset: 0,
            }}
            height={14}
            width={14}
            src="<svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M12.5 0.5C12.9062 0.5 13.25 0.65625 13.5625 0.9375C13.8438 1.25 14 1.59375 14 2V13C14 13.4375 13.8438 13.7812 13.5625 14.0625C13.25 14.375 12.9062 14.5 12.5 14.5H1.5C1.0625 14.5 0.71875 14.375 0.4375 14.0625C0.125 13.7812 0 13.4375 0 13V2C0 1.59375 0.125 1.25 0.4375 0.9375C0.71875 0.65625 1.0625 0.5 1.5 0.5H12.5ZM2.875 8.75H11.125C11.2188 8.75 11.3125 8.71875 11.375 8.65625C11.4375 8.59375 11.5 8.5 11.5 8.375V6.625C11.5 6.53125 11.4375 6.4375 11.375 6.375C11.3125 6.3125 11.2188 6.25 11.125 6.25H2.875C2.75 6.25 2.65625 6.3125 2.59375 6.375C2.53125 6.4375 2.5 6.53125 2.5 6.625V8.375C2.5 8.5 2.53125 8.59375 2.59375 8.65625C2.65625 8.71875 2.75 8.75 2.875 8.75Z' fill='#EEEEEE'/>
</svg>
"
          />
        </Frame>
        <Input
          value={eventTitleText}
          placeholder="Enter Event Title"
          onTextEditEnd={(e) => {
            setEventTitleText(e.characters);
          }}
          fontSize={16}
          fill="#EEE"
          width={"fill-parent"}
          inputFrameProps={{
            padding: 0,
          }}
          inputBehavior="wrap"
        />
      </AutoLayout>
      <AutoLayout
        name="timeline-block"
        hidden={!open}
        overflow="visible"
        direction="vertical"
        width="fill-parent"
      >
        <AutoLayout
          name="start-block"
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
            name="timeline-line-start"
            opacity={0.5}
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
            <Frame name="v-line" stroke="#FFF" width={1} height="fill-parent" />
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
            name="start-text-block"
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
                name="Start"
                fill="#AAA"
                lineHeight={20}
                fontFamily="Inter"
                fontSize={14}
                italic={true}
                fontWeight={500}
              >
                Start
              </Text>
            </AutoLayout>
            <Input
              value={startTextInput}
              placeholder="when lorem ipsum..."
              onTextEditEnd={(e) => {
                setStartTextInput(e.characters);
              }}
              fontSize={12}
              fill="#EEE"
              lineHeight={20}
              width={"fill-parent"}
              inputFrameProps={{
                fill: "#1D1D1D",
                cornerRadius: 4,
                padding: {
                  vertical: 4,
                  horizontal: 8,
                },
              }}
              inputBehavior="wrap"
            />
          </AutoLayout>
        </AutoLayout>
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
            name="timeline-line-body"
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
            <Input
              value={elementInput}
              placeholder="element-name"
              onTextEditEnd={(e) => {
                setElementInput(e.characters);
              }}
              fontSize={12}
              fill="#8981F7"
              lineHeight={20}
              width={"fill-parent"}
              inputFrameProps={{
                fill: "#1D1D1D",
                cornerRadius: 4,
                padding: {
                  vertical: 2,
                  horizontal: 8,
                },
              }}
              inputBehavior="wrap"
            />
            <AutoLayout
              name="attribute-block"
              overflow="visible"
              direction="vertical"
              spacing={4}
              width="fill-parent"
            >
              <Input
                value={attributeInput}
                placeholder="attribute"
                onTextEditEnd={(e) => {
                  setAttributeInput(e.characters);
                }}
                fontSize={12}
                fill="#eee"
                lineHeight={20}
                width={"fill-parent"}
                inputFrameProps={{
                  fill: "#1D1D1D",
                  cornerRadius: 4,
                  padding: {
                    vertical: 2,
                    horizontal: 8,
                  },
                }}
                inputBehavior="wrap"
              />
              <AutoLayout
                name="value-list-block"
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
                  name="value-from"
                  overflow="visible"
                  spacing={4}
                  width="fill-parent"
                  verticalAlignItems="center"
                >
                  <AutoLayout
                    name="value-label-from"
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
                  <Input
                    value={valueFromInput}
                    placeholder="0"
                    onTextEditEnd={(e) => {
                      setValueFromInput(e.characters);
                    }}
                    fontSize={12}
                    fill="#eee"
                    lineHeight={20}
                    width={"fill-parent"}
                    inputFrameProps={{
                      fill: "#1D1D1D",
                      cornerRadius: 4,
                      padding: {
                        vertical: 2,
                        horizontal: 8,
                      },
                    }}
                    inputBehavior="wrap"
                  />
                </AutoLayout>
                <AutoLayout
                  name="value-to"
                  overflow="visible"
                  spacing={4}
                  width="fill-parent"
                  verticalAlignItems="center"
                >
                  <AutoLayout
                    name="value-label-to"
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
                  <Input
                    value={valueToInput}
                    placeholder="100"
                    onTextEditEnd={(e) => {
                      setValueToInput(e.characters);
                    }}
                    fontSize={12}
                    fill="#eee"
                    lineHeight={20}
                    width={"fill-parent"}
                    inputFrameProps={{
                      fill: "#1D1D1D",
                      cornerRadius: 4,
                      padding: {
                        vertical: 2,
                        horizontal: 8,
                      },
                    }}
                    inputBehavior="wrap"
                  />
                </AutoLayout>
                <AutoLayout
                  name="value-duration"
                  overflow="visible"
                  spacing={4}
                  width="fill-parent"
                  verticalAlignItems="center"
                >
                  <AutoLayout
                    name="value-label-duration"
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
                  <Input
                    value={valueDurationInput}
                    placeholder="0"
                    onTextEditEnd={(e) => {
                      setValueDurationInput(e.characters);
                    }}
                    fontSize={12}
                    fill="#eee"
                    lineHeight={20}
                    width={"fill-parent"}
                    inputFrameProps={{
                      fill: "#1D1D1D",
                      cornerRadius: 4,
                      padding: {
                        vertical: 2,
                        horizontal: 8,
                      },
                    }}
                    inputBehavior="wrap"
                  />
                </AutoLayout>
                <AutoLayout
                  name="value-delay"
                  overflow="visible"
                  spacing={4}
                  width="fill-parent"
                  verticalAlignItems="center"
                >
                  <AutoLayout
                    name="value-label-delay"
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
                  <Input
                    value={valueDelayInput}
                    placeholder="0"
                    onTextEditEnd={(e) => {
                      setValueDelayInput(e.characters);
                    }}
                    fontSize={12}
                    fill="#eee"
                    lineHeight={20}
                    width={"fill-parent"}
                    inputFrameProps={{
                      fill: "#1D1D1D",
                      cornerRadius: 4,
                      padding: {
                        vertical: 2,
                        horizontal: 8,
                      },
                    }}
                    inputBehavior="wrap"
                  />
                </AutoLayout>
                <AutoLayout
                  name="value-ease"
                  overflow="visible"
                  spacing={4}
                  width="fill-parent"
                  verticalAlignItems="center"
                >
                  <AutoLayout
                    name="value-label-ease"
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
                  <Input
                    value={valueEaseInput}
                    placeholder="linear"
                    onTextEditEnd={(e) => {
                      setValueEaseInput(e.characters);
                    }}
                    fontSize={12}
                    fill="#eee"
                    lineHeight={20}
                    width={"fill-parent"}
                    inputFrameProps={{
                      fill: "#1D1D1D",
                      cornerRadius: 4,
                      padding: {
                        vertical: 2,
                        horizontal: 8,
                      },
                    }}
                    inputBehavior="wrap"
                  />
                </AutoLayout>
              </AutoLayout>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
        <AutoLayout
          name="finish-block"
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
            name="timeline-line-finish"
            opacity={0.5}
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
                name="Finish"
                fill="#AAA"
                lineHeight={20}
                fontFamily="Inter"
                fontSize={14}
                italic={true}
                fontWeight={500}
              >
                Finish
              </Text>
            </AutoLayout>
            <Input
              value={finishTextInput}
              placeholder="when lorem ipsum..."
              onTextEditEnd={(e) => {
                setFinishTextInput(e.characters);
              }}
              fontSize={12}
              fill="#EEE"
              lineHeight={20}
              width={"fill-parent"}
              inputFrameProps={{
                fill: "#1D1D1D",
                cornerRadius: 4,
                padding: {
                  vertical: 4,
                  horizontal: 8,
                },
              }}
              inputBehavior="wrap"
            />
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}
widget.register(AnimationAnnotationWidget);
