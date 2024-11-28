const object: string = 'object';
const array: string = 'array';
const string: string = 'string';
const text: string = 'text';
const color: string = 'color';
const gradient: string = 'gradient';
const image: string = 'image';
const number: string = 'number';
const x: string = 'x';
const y: string = 'y';
const dateTime: string = 'date-time';

const colorBackground = {
    type: object,
    properties: {
        type: {
            const: color
        },
        color: {
            type: string
        }
    },
    required: ['type', 'color']
};

const imageBackground = {
    type: object,
    properties: {
        type: {
            const: image
        },
        imageUrl: {
            type: string
        }
    },
    required: ['type', 'imageUrl']
};

const gradientBackground = {
    type: object,
    properties: {
        type: {
            const: gradient
        },
        firstColor: {
            type: string
        },
        secondColor: {
            type: string
        }
    },
    required: ['type', 'firstColor', 'secondColor']
};

const position = {
    type: object,
    properties: {
        x: {
            type: number
        },
        y: {
            type: number
        }
    },
    required: [x, y]
};

const size = {
    type: object,
    properties: {
        width: {
            type: number
        },
        height: {
            type: number
        }
    },
    required: ['width', 'height']
};

const textObject = {
    type: object,
    properties: {
        id: {
            type: string
        },
        position: position,
        size: size,
        type: {
            const: text
        },
        content: {
            type: string
        },
        fontFamily: {
            type: string
        },
        fontSize: {
            type: number
        }
    },
    required: ['id', 'position', 'size', 'type', 'content', 'fontFamily', 'fontSize']
};

const imageObject = {
    type: object,
    properties: {
        id: {
            type: string
        },
        position: position,
        size: size,
        type: {
            const: image
        },
        imageUrl: {
            type: string
        }
    },
    required: ['id', 'position', 'size', 'type', 'imageUrl']
};

const editorScheme = {
    type: object,
    properties: {
        presentation: {
            type: object,
            properties: {
                id: {
                    type: string
                },
                title: {
                    type: string
                },
                author: {
                    type: string
                },
                createdAt: {
                    type: string, format: dateTime
                },
                slides: {
                    type: array,
                    items: {
                        type: object,
                        properties: {
                            id: {
                                type: string
                            },
                            background: {
                                oneOf: [colorBackground, imageBackground, gradientBackground]
                            },
                            objects: {
                                type: array,
                                items: {
                                    oneOf: [textObject, imageObject]
                                }
                            }
                        },
                        required: ['id', 'background'],
                    },
                },
            },
            required: ['id', 'title', 'author', 'createdAt', 'slides'],
        },
        selection: {
            type: object,
            properties: {
                selectedSlidesIds: {
                    type: array,
                    items: {
                        type: string
                    }
                },
                selectedObjectsIds: {
                    type: array,
                    items: {
                        type: string
                    },
                },
            },
        },
    },
    required: ['presentation'],
};

export {
    editorScheme,
}