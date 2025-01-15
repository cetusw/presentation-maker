import {EditorType, Position, Presentation, Size} from '../presentationTypes.ts'

const defaultPosition: Position = {x: 230, y: 400}
const defaultSize: Size = {width: 500, height: 100}
const defaultFontFamily: string = 'Times New Roman'
const defaultFontColor: string = '#000000'
const defaultFontSize: number = 24
const defaultFontWeight: number = 400
const defaultFontStyle: string = 'none'
const defaultTextDecoration: string = 'none'
const defaultColor: string = '#FFFFFF'
const defaultText: string = 'Вводите текст'
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
                    'imageUrl': 'public/images/misha.jpg',
                    'position': {'x': 100, 'y': 100},
                    'size': {'width': 100, 'height': 100}
                }
            ]
        },
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