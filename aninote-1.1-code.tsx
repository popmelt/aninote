/** this version has no functionality. styling only. */


function AnimationAnnotationWidget() {
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
        showShadowBehindNode:
          false,
      }}
      fill="#2B2B2B"
      stroke="#00000080"
      cornerRadius={16}
      overflow="visible"
      direction="vertical"
      spacing={16}
      padding={{
        vertical: 16,
        horizontal: 20,
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
      >
        <AutoLayout
          name="event-title-open-handler"
          overflow="visible"
          spacing={8}
          padding={{
            vertical: 2,
            horizontal: 0,
          }}
          horizontalAlignItems="center"
          verticalAlignItems="center"
        >
          <SVG
            name="icon-collapse"
            height={14}
            width={14}
            src="<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M12.5 0C12.9062 0 13.25 0.15625 13.5625 0.4375C13.8438 0.75 14 1.09375 14 1.5V12.5C14 12.9375 13.8438 13.2812 13.5625 13.5625C13.25 13.875 12.9062 14 12.5 14H1.5C1.0625 14 0.71875 13.875 0.4375 13.5625C0.125 13.2812 0 12.9375 0 12.5V1.5C0 1.09375 0.125 0.75 0.4375 0.4375C0.71875 0.15625 1.0625 0 1.5 0H12.5ZM2.875 8.25H11.125C11.2188 8.25 11.3125 8.21875 11.375 8.15625C11.4375 8.09375 11.5 8 11.5 7.875V6.125C11.5 6.03125 11.4375 5.9375 11.375 5.875C11.3125 5.8125 11.2188 5.75 11.125 5.75H2.875C2.75 5.75 2.65625 5.8125 2.59375 5.875C2.53125 5.9375 2.5 6.03125 2.5 6.125V7.875C2.5 8 2.53125 8.09375 2.59375 8.15625C2.65625 8.21875 2.75 8.25 2.875 8.25Z' fill='#EEEEEE'/>
</svg>
"
          />
        </AutoLayout>
        <AutoLayout
          name="event-title-input"
          overflow="visible"
          width="fill-parent"
        >
          <Text
            name="onScroll - New animation"
            fill="#EEE"
            width="fill-parent"
            fontFamily="Inter"
            fontWeight={500}
          >
            onScroll - New
            animation
          </Text>
        </AutoLayout>
      </AutoLayout>
      <AutoLayout
        name="sequence-block"
        overflow="visible"
        direction="vertical"
        width="fill-parent"
      >
        <AutoLayout
          name="start-block"
          effect={{
            type: "inner-shadow",
            color:
              "#00000080",
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
                lineHeight={
                  20
                }
                fontFamily="Inter"
                fontSize={14}
                italic={true}
                fontWeight={
                  500
                }
              >
                Start
              </Text>
            </AutoLayout>
            <AutoLayout
              name="start-text-input"
              fill="#1D1D1D"
              cornerRadius={4}
              overflow="visible"
              spacing={8}
              padding={{
                vertical: 4,
                horizontal: 8,
              }}
              width="fill-parent"
            >
              <Text
                name="when lorem ipsum dolor sit amet consectetur adipiscing elit finibus enim leo"
                fill="#EEE"
                width="fill-parent"
                lineHeight={
                  20
                }
                fontFamily="Inter"
                fontSize={12}
                fontWeight={
                  500
                }
              >
                when lorem
                ipsum dolor
                sit amet
                consectetur
                adipiscing
                elit finibus
                enim leo
              </Text>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
        <AutoLayout
          name="element-block"
          effect={{
            type: "inner-shadow",
            color:
              "#00000080",
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
                  cornerRadius={
                    14
                  }
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
                cornerRadius={
                  4
                }
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
                  lineHeight={
                    20
                  }
                  fontFamily="Inter"
                  fontSize={
                    12
                  }
                  fontWeight={
                    500
                  }
                >
                  element-name
                </Text>
              </AutoLayout>
              <AutoLayout
                name="element-remove-handler"
                fill="#1D1D1D"
                cornerRadius={
                  4
                }
                overflow="visible"
                spacing={8}
                padding={4}
              >
                <Frame
                  name="icon-remove"
                  stroke="#8981F780"
                  cornerRadius={
                    14
                  }
                  width={16}
                  height={16}
                >
                  <Rectangle
                    name="icon-minus"
                    x={4}
                    y={9}
                    fill="#8981F780"
                    cornerRadius={
                      4
                    }
                    rotation={
                      90
                    }
                    width={2}
                    height={8}
                  />
                </Frame>
              </AutoLayout>
            </AutoLayout>
            <AutoLayout
              name="attribute-block"
              overflow="visible"
              direction="vertical"
              spacing={4}
              width="fill-parent"
            >
              <AutoLayout
                name="attribute-title-block"
                fill="#1D1D1D"
                cornerRadius={
                  4
                }
                overflow="visible"
                width="fill-parent"
              >
                <AutoLayout
                  name="attribute-add-handler"
                  x={-44}
                  y={4}
                  positioning="absolute"
                  overflow="visible"
                  horizontalAlignItems="center"
                  verticalAlignItems="center"
                >
                  <Frame
                    name="icon-add"
                    stroke="#AAAAAA80"
                    cornerRadius={
                      14
                    }
                    width={16}
                    height={
                      16
                    }
                  >
                    <SVG
                      name="icon-add"
                      x={4}
                      y={4}
                      height={
                        8
                      }
                      width={
                        8
                      }
                      src="<svg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M3 1C3 0.447715 3.44772 0 4 0C4.55228 0 5 0.447715 5 1V7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7V1Z' fill='#AAAAAA' fill-opacity='0.5'/>
<path d='M1 5C0.447715 5 0 4.55228 0 4C0 3.44772 0.447715 3 1 3H7C7.55228 3 8 3.44772 8 4C8 4.55228 7.55228 5 7 5H1Z' fill='#AAAAAA' fill-opacity='0.5'/>
</svg>
"
                    />
                  </Frame>
                </AutoLayout>
                <AutoLayout
                  name="attribute-input"
                  fill="#1D1D1D"
                  cornerRadius={
                    4
                  }
                  overflow="visible"
                  spacing={8}
                  padding={{
                    vertical: 2,
                    horizontal: 8,
                  }}
                  width="fill-parent"
                >
                  <Text
                    name="attribute"
                    fill="#EEE"
                    width="fill-parent"
                    lineHeight={
                      20
                    }
                    fontFamily="Inter"
                    fontSize={
                      12
                    }
                    fontWeight={
                      500
                    }
                  >
                    attribute
                  </Text>
                </AutoLayout>
                <AutoLayout
                  name="attribute-remove-handler"
                  fill="#1D1D1D"
                  cornerRadius={
                    4
                  }
                  overflow="visible"
                  spacing={8}
                  padding={4}
                >
                  <Frame
                    name="icon-remove"
                    stroke="#AAAAAA80"
                    cornerRadius={
                      14
                    }
                    width={16}
                    height={
                      16
                    }
                  >
                    <Rectangle
                      name="icon-minus"
                      x={4}
                      y={9}
                      fill="#AAAAAA80"
                      cornerRadius={
                        4
                      }
                      rotation={
                        90
                      }
                      width={
                        2
                      }
                      height={
                        8
                      }
                    />
                  </Frame>
                </AutoLayout>
              </AutoLayout>
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
                    spacing={
                      8
                    }
                  >
                    <Text
                      name="from:"
                      fill="#AAA"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      italic={
                        true
                      }
                      fontWeight={
                        500
                      }
                    >
                      from:
                    </Text>
                  </AutoLayout>
                  <AutoLayout
                    name="value-input-from"
                    fill="#1D1D1D"
                    cornerRadius={
                      4
                    }
                    overflow="visible"
                    spacing={
                      8
                    }
                    padding={{
                      vertical: 2,
                      horizontal: 8,
                    }}
                    width="fill-parent"
                    verticalAlignItems="center"
                  >
                    <Text
                      name="0"
                      fill="#EEE"
                      width="fill-parent"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      fontWeight={
                        500
                      }
                    >
                      0
                    </Text>
                  </AutoLayout>
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
                    spacing={
                      8
                    }
                  >
                    <Text
                      name="to:"
                      fill="#AAA"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      italic={
                        true
                      }
                      fontWeight={
                        500
                      }
                    >
                      to:
                    </Text>
                  </AutoLayout>
                  <AutoLayout
                    name="value-input-to"
                    fill="#1D1D1D"
                    cornerRadius={
                      4
                    }
                    overflow="visible"
                    spacing={
                      8
                    }
                    padding={{
                      vertical: 2,
                      horizontal: 8,
                    }}
                    width="fill-parent"
                    verticalAlignItems="center"
                  >
                    <Text
                      name="100"
                      fill="#EEE"
                      width="fill-parent"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      fontWeight={
                        500
                      }
                    >
                      100
                    </Text>
                  </AutoLayout>
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
                    spacing={
                      8
                    }
                  >
                    <Text
                      name="duration:"
                      fill="#AAA"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      italic={
                        true
                      }
                      fontWeight={
                        500
                      }
                    >
                      duration:
                    </Text>
                  </AutoLayout>
                  <AutoLayout
                    name="value-input-duration"
                    fill="#1D1D1D"
                    cornerRadius={
                      4
                    }
                    overflow="visible"
                    spacing={
                      8
                    }
                    padding={{
                      vertical: 2,
                      horizontal: 8,
                    }}
                    width="fill-parent"
                    verticalAlignItems="center"
                  >
                    <Text
                      name="0"
                      fill="#EEE"
                      width="fill-parent"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      fontWeight={
                        500
                      }
                    >
                      0
                    </Text>
                  </AutoLayout>
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
                    spacing={
                      8
                    }
                  >
                    <Text
                      name="delay:"
                      fill="#AAA"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      italic={
                        true
                      }
                      fontWeight={
                        500
                      }
                    >
                      delay:
                    </Text>
                  </AutoLayout>
                  <AutoLayout
                    name="value-input-delay"
                    fill="#1D1D1D"
                    cornerRadius={
                      4
                    }
                    overflow="visible"
                    spacing={
                      8
                    }
                    padding={{
                      vertical: 2,
                      horizontal: 8,
                    }}
                    width="fill-parent"
                    verticalAlignItems="center"
                  >
                    <Text
                      name="0"
                      fill="#EEE"
                      width="fill-parent"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      fontWeight={
                        500
                      }
                    >
                      0
                    </Text>
                  </AutoLayout>
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
                    spacing={
                      8
                    }
                  >
                    <Text
                      name="ease:"
                      fill="#AAA"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      italic={
                        true
                      }
                      fontWeight={
                        500
                      }
                    >
                      ease:
                    </Text>
                  </AutoLayout>
                  <AutoLayout
                    name="value-input-ease"
                    fill="#1D1D1D"
                    cornerRadius={
                      4
                    }
                    overflow="visible"
                    spacing={
                      8
                    }
                    padding={{
                      vertical: 2,
                      horizontal: 8,
                    }}
                    width="fill-parent"
                    verticalAlignItems="center"
                  >
                    <Text
                      name="linear"
                      fill="#EEE"
                      width="fill-parent"
                      lineHeight={
                        20
                      }
                      fontFamily="Inter"
                      fontSize={
                        12
                      }
                      fontWeight={
                        500
                      }
                    >
                      linear
                    </Text>
                  </AutoLayout>
                </AutoLayout>
              </AutoLayout>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
        <AutoLayout
          name="finish-block"
          effect={{
            type: "inner-shadow",
            color:
              "#00000080",
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
            <Frame
              name="v-line"
              stroke="#FFF"
              width={1}
              height={27}
            />
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
                lineHeight={
                  20
                }
                fontFamily="Inter"
                fontSize={14}
                italic={true}
                fontWeight={
                  500
                }
              >
                Finish
              </Text>
            </AutoLayout>
            <AutoLayout
              name="finish-input"
              fill="#1D1D1D"
              cornerRadius={4}
              overflow="visible"
              spacing={8}
              padding={{
                vertical: 4,
                horizontal: 8,
              }}
              width="fill-parent"
            >
              <Text
                name="when lorem ipsum dolor sit amet consectetur adipiscing elit finibus enim leo"
                fill="#EEE"
                width="fill-parent"
                lineHeight={
                  20
                }
                fontFamily="Inter"
                fontSize={12}
                fontWeight={
                  500
                }
              >
                when lorem
                ipsum dolor
                sit amet
                consectetur
                adipiscing
                elit finibus
                enim leo
              </Text>
            </AutoLayout>
          </AutoLayout>
        </AutoLayout>
      </AutoLayout>
    </AutoLayout>
  );
}
