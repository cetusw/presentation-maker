import {EditorType, Position, Presentation, Size} from './presentationTypes.ts';
// import {v4 as generateUuid} from 'uuid';

const defaultPosition: Position = {x: 225, y: 270};
const defaultSize: Size = {width: 500, height: 100};
const defaultFontFamily: string = 'Roboto';
const defaultFontSize: number = 24;
const defaultColor: string = '#FFFFFF';
const defaultText: string = 'Добавьте текст';
const defaultTitle: string = 'Презентация без названия';
const slideCollectionScale: number = 5;

const colorBackground = {
    type: 'object',
    properties: {
        type: {
            const: 'color'
        },
        color: {
            type: 'string'
        }
    },
    required: ['type', 'color']
};

const imageBackground = {
    type: 'object',
    properties: {
        type: {
            const: 'image'
        },
        imageUrl: {
            type: 'string'
        }
    },
    required: ['type', 'imageUrl']
};

const gradientBackground = {
    type: 'object',
    properties: {
        type: {
            const: 'gradient'
        },
        firstColor: {
            type: 'string'
        },
        secondColor: {
            type: 'string'
        }
    },
    required: ['type', 'firstColor', 'secondColor']
};

const position = {
    type: 'object',
    properties: {
        x: {
            type: 'number'
        },
        y: {
            type: 'number'
        }
    },
    required: ['x', 'y']
};

const size = {
    type: 'object',
    properties: {
        width: {
            type: 'number'
        },
        height: {
            type: 'number'
        }
    },
    required: ['width', 'height']
};

const textObject = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        position: position,
        size: size,
        type: {
            const: 'text'
        },
        content: {
            type: 'string'
        },
        fontFamily: {
            type: 'string'
        },
        fontSize: {
            type: 'number'
        }
    },
    required: ['id', 'position', 'size', 'type', 'content', 'fontFamily', 'fontSize']
};

const imageObject = {
    type: 'object',
    properties: {
        id: {
            type: 'string'
        },
        position: position,
        size: size,
        type: {
            const: 'image'
        },
        imageUrl: {
            type: 'string'
        }
    },
    required: ['id', 'position', 'size', 'type', 'imageUrl']
};

const editorSchema = {
    type: 'object',
    properties: {
        presentation: {
            type: 'object',
            properties: {
                id: {
                    type: 'string'
                },
                title: {
                    type: 'string'
                },
                author: {
                    type: 'string'
                },
                createdAt: {
                    type: 'string', format: 'date-time'
                },
                slides: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            id: {
                                type: 'string'
                            },
                            background: {
                                oneOf: [colorBackground, imageBackground, gradientBackground]
                            },
                            objects: {
                                type: 'array',
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
            type: 'object',
            properties: {
                selectedSlidesIds: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                selectedObjectsIds: {
                    type: 'array',
                    items: {
                        type: 'string'
                    },
                },
            },
        },
    },
    required: ['presentation'],
};

const defaultPresentation: Presentation = {
    'id': 'presentation-1',
    'title': 'Новая презентация',
    'author': 'Mikhail',
    'createdAt': new Date('2024-09-05T00:00:00Z'),
    'slides': [
        {
            'id': 'slide-1',
            'background': {
                'type': 'gradient',
                'firstColor': '#ff0000',
                'secondColor': '#0000ff'
            },
            'objects': [
                {
                    'id': 'text-1',
                    'type': 'text',
                    'content': 'Text on slide 1',
                    'fontFamily': 'Arial',
                    'fontSize': 24,
                    'position': {'x': 0, 'y': 0},
                    'size': {'width': 500, 'height': 80}
                },
                {
                    'id': 'image-1',
                    'type': 'image',
                    'imageUrl': 'public/images/cat.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
        {
            'id': 'slide-2',
            'background': {
                'type': 'image',
                'imageUrl': 'public/images/background.jpg'
            },
            'objects': [
                {
                    'id': 'text-2',
                    'type': 'text',
                    'content': 'Text on slide 2',
                    'fontFamily': 'Times New Roman',
                    'fontSize': 60,
                    'position': {'x': 200, 'y': 100},
                    'size': {'width': 1600, 'height': 90}
                },
                {
                    'id': 'image-2',
                    'type': 'image',
                    'imageUrl': 'public/images/earth.gif',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
        {
            'id': 'slide-3',
            'background': {
                'type': 'image',
                'imageUrl': 'public/images/cat.jpg'
            },
            'objects': [
                {
                    'id': 'text-3',
                    'type': 'text',
                    'content': 'Text on slide 3',
                    'fontFamily': 'Times New Roman',
                    'fontSize': 60,
                    'position': {'x': 0, 'y': 100},
                    'size': {'width': 1600, 'height': 90}
                },
                {
                    'id': 'image-3',
                    'type': 'image',
                    'imageUrl': 'public/images/cat.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
        {
            'id': 'slide-4',
            'background': {
                'type': 'color',
                'color': '#ffffff',
            },
            'objects': [
                {
                    'id': 'text-4',
                    'type': 'text',
                    'content': 'Text on slide 4',
                    'fontFamily': 'Arial',
                    'fontSize': 72,
                    'position': {'x': 0, 'y': 0},
                    'size': {'width': 1920, 'height': 100}
                },
                {
                    'id': 'image-4',
                    'type': 'image',
                    'imageUrl': 'public/images/cat.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
        {
            'id': 'slide-5',
            'background': {
                'type': 'color',
                'color': '#0000FF',
            },
            'objects': [
                {
                    'id': 'text-5',
                    'type': 'text',
                    'content': 'Text on slide 5',
                    'fontFamily': 'Arial',
                    'fontSize': 72,
                    'position': {'x': 0, 'y': 0},
                    'size': {'width': 1920, 'height': 100}
                },
                {
                    'id': 'image-5',
                    'type': 'image',
                    'imageUrl': 'public/images/cat.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
        {
            'id': 'slide-6',
            'background': {
                'type': 'image',
                'imageUrl': 'public/images/cat.jpg'
            },
            'objects': [
                {
                    'id': 'text-6',
                    'type': 'text',
                    'content': 'Text on slide 6',
                    'fontFamily': 'Times New Roman',
                    'fontSize': 60,
                    'position': {'x': 200, 'y': 100},
                    'size': {'width': 1600, 'height': 90}
                },
                {
                    'id': 'image-6',
                    'type': 'image',
                    'imageUrl': 'public/images/cat.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
        {
            'id': 'slide-7',
            'background': {
                'type': 'gradient',
                'firstColor': '#ff0000',
                'secondColor': '#00ff00'
            },
            'objects': [
                {
                    'id': 'text-7',
                    'type': 'text',
                    'content': 'Text on slide 7',
                    'fontFamily': 'Arial',
                    'fontSize': 72,
                    'position': {'x': 0, 'y': 0},
                    'size': {'width': 1920, 'height': 100}
                },
                {
                    'id': 'image-7',
                    'type': 'image',
                    'imageUrl': 'public/images/cat.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
        {
            'id': 'slide-8',
            'background': {
                'type': 'gradient',
                'firstColor': '#ff00ff',
                'secondColor': '#0000ff'
            },
            'objects': [
                {
                    'id': 'text-8',
                    'type': 'text',
                    'content': 'Text on slide 8',
                    'fontFamily': 'Arial',
                    'fontSize': 72,
                    'position': {'x': 0, 'y': 0},
                    'size': {'width': 1920, 'height': 100}
                },
                {
                    'id': 'image-8',
                    'type': 'image',
                    'imageUrl': 'public/images/cat.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
        {
            'id': 'slide-9',
            'background': {
                'type': 'image',
                'imageUrl': 'public/images/cat.jpg'
            },
            'objects': [
                {
                    'id': 'text-9',
                    'type': 'text',
                    'content': 'Text on slide 9',
                    'fontFamily': 'Arial',
                    'fontSize': 72,
                    'position': {'x': 0, 'y': 0},
                    'size': {'width': 1920, 'height': 100}
                },
                {
                    'id': 'image-9',
                    'type': 'image',
                    'imageUrl': 'public/images/cat.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        }
    ]
};

const minDefaultPresentation: Presentation = {
    id: '1',
    title: 'Minimum Presentation',
    author: 'Mikhail',
    createdAt: new Date('2024-09-05T00:00:00Z'),
    slides: []
};

const editor: EditorType = {
    presentation: defaultPresentation,
    selection: {
        selectedSlidesIds: [defaultPresentation.slides[1]?.id],
        selectedObjectsIds: [],
    }
}

export {
    editorSchema,
    defaultPosition,
    defaultSize,
    defaultText,
    defaultPresentation,
    defaultFontSize,
    defaultFontFamily,
    minDefaultPresentation,
    defaultColor,
    defaultTitle,
    slideCollectionScale,
    editor,
}