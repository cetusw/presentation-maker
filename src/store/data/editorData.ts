import {EditorType, Position, Presentation, Size} from '../presentationTypes.ts'

const defaultPosition: Position = {x: 450, y: 100}
const defaultSize: Size = {width: 500, height: 100}
const defaultFontFamily: string = 'Times New Roman'
const defaultFontColor: string = '#000000'
const defaultFontSize: number = 24
const defaultFontWeight: number = 400
const defaultFontStyle: string = 'none'
const defaultTextDecoration: string = 'none'
const defaultColor: string = '#FFFFFF'
const defaultText: string = 'текст презентации'
const defaultTitle: string = 'Презентация без названия'
const slideCollectionScale: number = 5

const availableFontFamilies: string[] = [
    'Times New Roman',
    'Roboto',
    'Arial',
    'Inter',
    'Space Mono',
    'Raleway',
    'Open Sans',
]

const availableFontSizes: string[] = ['6', '7', '8', '9', '10', '11', '12', '14', '18', '24', '30', '36', '48', '60', '72', '96']

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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
                    'fontStyle': 'italic',
                    'fontColor': '#000000',
                    'textDecoration': 'none',
                    'fontWeight': '200',
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
}

const defaultEditor: EditorType = {
    presentation: defaultPresentation,
    selection: {
        selectedSlidesIds: [defaultPresentation.slides[1]?.id],
        selectedObjectsIds: [],
    }
}

export {
    defaultPosition,
    defaultSize,
    defaultText,
    defaultPresentation,
    defaultFontSize,
    defaultFontFamily,
    defaultFontWeight,
    defaultFontColor,
    defaultFontStyle,
    defaultTextDecoration,
    defaultColor,
    defaultTitle,
    slideCollectionScale,
    defaultEditor,
    availableFontFamilies,
    availableFontSizes,
}