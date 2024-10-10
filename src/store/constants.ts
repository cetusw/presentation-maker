import {Position, Presentation, Size} from './presentationTypes.ts';
// import {v4 as generateUuid} from "uuid";

export const defaultPosition: Position = {x: 50, y: 50};
export const defaultSize: Size = {width: 50, height: 50};
export const defaultFontFamily: string = 'Arial';
export const defaultFontSize: number = 16;
export const defaultColor: string = '#FFFFFF';
export const defaultText: string = 'New text';
export const defaultTitle: string = 'New title';
export const slideCollectionScale: number = 5;

export const defaultPresentation: Presentation = {
    "id": "presentation-1",
    "title": "Название презентации",
    "author": "Mikhail",
    "createdAt": new Date("2024-09-05T00:00:00Z"),
    "slides": [
        {
            "id": "slide-1",
            "background": {
                "type": "gradient",
                "firstColor": "#ff0000",
                "secondColor": "#0000ff"
            },
            "objects": [
                {
                    "id": "text-1",
                    "type": "text",
                    "content": "Text on slide 1",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-1",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-2",
            "background": {
                "type": "image",
                "imageUrl": "public/images/background.jpg"
            },
            "objects": [
                {
                    "id": "text-2",
                    "type": "text",
                    "content": "Text on slide 2",
                    "fontFamily": "Times New Roman",
                    "fontSize": 60,
                    "position": {"x": 200, "y": 100},
                    "size": {"width": 1600, "height": 90}
                },
                {
                    "id": "image-2",
                    "type": "image",
                    "imageUrl": "public/images/earth.gif",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-3",
            "background": {
                "type": "image",
                "imageUrl": "public/images/cat.jpg"
            },
            "objects": [
                {
                    "id": "text-3",
                    "type": "text",
                    "content": "Text on slide 3",
                    "fontFamily": "Times New Roman",
                    "fontSize": 60,
                    "position": {"x": 0, "y": 100},
                    "size": {"width": 1600, "height": 90}
                },
                {
                    "id": "image-3",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-4",
            "background": {
                "type": "color",
                "color": "#00FF00",
            },
            "objects": [
                {
                    "id": "text-4",
                    "type": "text",
                    "content": "Text on slide 4",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-4",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-5",
            "background": {
                "type": "color",
                "color": "#0000FF",
            },
            "objects": [
                {
                    "id": "text-5",
                    "type": "text",
                    "content": "Text on slide 5",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-5",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-6",
            "background": {
                "type": "image",
                "imageUrl": "public/images/cat.jpg"
            },
            "objects": [
                {
                    "id": "text-6",
                    "type": "text",
                    "content": "Text on slide 6",
                    "fontFamily": "Times New Roman",
                    "fontSize": 60,
                    "position": {"x": 200, "y": 100},
                    "size": {"width": 1600, "height": 90}
                },
                {
                    "id": "image-6",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-7",
            "background": {
                "type": "gradient",
                "firstColor": "#ff0000",
                "secondColor": "#00ff00"
            },
            "objects": [
                {
                    "id": "text-7",
                    "type": "text",
                    "content": "Text on slide 7",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-7",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-8",
            "background": {
                "type": "gradient",
                "firstColor": "#ff00ff",
                "secondColor": "#0000ff"
            },
            "objects": [
                {
                    "id": "text-8",
                    "type": "text",
                    "content": "Text on slide 8",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-8",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-9",
            "background": {
                "type": "image",
                "imageUrl": "public/images/cat.jpg"
            },
            "objects": [
                {
                    "id": "text-9",
                    "type": "text",
                    "content": "Text on slide 9",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-9",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-10",
            "background": {
                "type": "gradient",
                "firstColor": "#00ff00",
                "secondColor": "#ff0000"
            },
            "objects": [
                {
                    "id": "text-10",
                    "type": "text",
                    "content": "Text on slide 10",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-10",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-11",
            "background": {
                "type": "gradient",
                "firstColor": "#ff0000",
                "secondColor": "#0000ff"
            },
            "objects": [
                {
                    "id": "text-11",
                    "type": "text",
                    "content": "Text on slide 11",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-11",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-12",
            "background": {
                "type": "image",
                "imageUrl": "public/images/cat.jpg"
            },
            "objects": [
                {
                    "id": "text-12",
                    "type": "text",
                    "content": "Text on slide 12",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-12",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-13",
            "background": {
                "type": "gradient",
                "firstColor": "#00ff00",
                "secondColor": "#ff00ff"
            },
            "objects": [
                {
                    "id": "text-13",
                    "type": "text",
                    "content": "Text on slide 13",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-13",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-14",
            "background": {
                "type": "image",
                "imageUrl": "public/images/cat.jpg"
            },
            "objects": [
                {
                    "id": "text-14",
                    "type": "text",
                    "content": "Text on slide 14",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-14",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-15",
            "background": {
                "type": "gradient",
                "firstColor": "#ff0000",
                "secondColor": "#00ff00"
            },
            "objects": [
                {
                    "id": "text-15",
                    "type": "text",
                    "content": "Text on slide 15",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-15",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-16",
            "background": {
                "type": "image",
                "imageUrl": "public/images/cat.jpg"
            },
            "objects": [
                {
                    "id": "text-16",
                    "type": "text",
                    "content": "Text on slide 16",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-16",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-17",
            "background": {
                "type": "gradient",
                "firstColor": "#00ff00",
                "secondColor": "#ff0000"
            },
            "objects": [
                {
                    "id": "text-17",
                    "type": "text",
                    "content": "Text on slide 17",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-17",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-18",
            "background": {
                "type": "gradient",
                "firstColor": "#ff00ff",
                "secondColor": "#00ff00"
            },
            "objects": [
                {
                    "id": "text-18",
                    "type": "text",
                    "content": "Text on slide 18",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {"x": 0, "y": 0},
                    "size": {"width": 1920, "height": 100}
                },
                {
                    "id": "image-18",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {"x": 100, "y": 100},
                    "size": {"width": 100, "height": 100}
                }
            ]
        },
        {
            "id": "slide-19",
            "background": {
                "type": "image",
                "imageUrl": "public/images/cat.jpg"
            },
            "objects": [
                {
                    "id": "text-19",
                    "type": "text",
                    "content": "Text on slide 19",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "size": {
                        "width": 1920,
                        "height": 100
                    }
                },
                {
                    "id": "image-19",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {
                        "x": 100,
                        "y": 100
                    },
                    "size": {
                        "width": 100,
                        "height": 100
                    }
                }
            ]
        },
        {
            "id": "slide-20",
            "background": {
                "type": "gradient",
                "firstColor": "#0000ff",
                "secondColor": "#ff00ff"
            },
            "objects": [
                {
                    "id": "text-20",
                    "type": "text",
                    "content": "Text on slide 20",
                    "fontFamily": "Arial",
                    "fontSize": 72,
                    "position": {
                        "x": 0,
                        "y": 0
                    },
                    "size": {
                        "width": 1920,
                        "height": 100
                    }
                },
                {
                    "id": "image-20",
                    "type": "image",
                    "imageUrl": "public/images/cat.jpg",
                    "position": {
                        "x": 100,
                        "y": 100
                    },
                    "size": {
                        "width": 100,
                        "height": 100
                    }
                }
            ]
        }
    ]
};

export const minDefaultPresentation: Presentation = {
    id: "1",
    title: "Minimum Presentation",
    author: "Mikhail",
    createdAt: new Date("2024-09-05T00:00:00Z"),
    slides: []
};

