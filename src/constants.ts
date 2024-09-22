import {Position, Presentation, Size} from './presentationTypes';
import {v4 as generateUuid} from "uuid";

export const defaultPosition: Position = {x: 50, y: 50};
export const defaultSize: Size = {width: 50, height: 50};
export const defaultFontFamily: string = 'Arial';
export const defaultFontSize: number = 16;
export const defaultColor: string = '#FFFFFF';
export const defaultText: string = 'New text';
export const defaultTitle: string = 'New title';

export const defaultPresentation: Presentation = {
    id: `presentation-${generateUuid()}`,
    title: "Название презентации",
    author: "Mikhail",
    createdAt: new Date("2024-09-05T00:00:00Z"),
    slides: [
        {
            id: "slide-1",
            background: {
                type: "gradient",
                firstColor: "#FF0000",
                secondColor: "#0000FF",
            },
            objects: [
                {
                    id: "text-1",
                    type: "text",
                    content: "Text on slide",
                    fontFamily: "Arial",
                    fontSize: 72,
                    position: {
                        x: 0,
                        y: 0
                    },
                    size: {
                        width: 1920,
                        height: 100
                    }
                },
                {
                    id: "image-1",
                    type: "image",
                    imageUrl: "image.png",
                    position: {
                        x: 100,
                        y: 200
                    },
                    size: {
                        width: 1024,
                        height: 768
                    }
                }
            ]
        },
        {
            id: "slide-2",
            background: {
                type: "image",
                imageUrl: "background.jpg"
            },
            objects: [
                {
                    id: "text-2",
                    type: "text",
                    content: "Text on slide 2",
                    fontFamily: "Times New Roman",
                    fontSize: 60,
                    position: {
                        x: 200,
                        y: 100
                    },
                    size: {
                        width: 1600,
                        height: 90
                    }
                },
                {
                    id: "image-2",
                    type: "image",
                    imageUrl: "image.jpg",
                    position: {
                        x: 500,
                        y: 500
                    },
                    size: {
                        width: 1280,
                        height: 1024
                    }
                }
            ]
        }
    ]
}