type Presentation = {
    id: string;
    title: string;
    author: string;
    createdAt: Date;
    slides: Slide[];
}

type Slide = {
    id: string;
    background: BackgroundType;
    objects: SlideObject[];
}

type BackgroundType = BackgroundColor | BackgroundImage | BackgroundGradient;

type BackgroundColor = {
    type: 'color';
    color: string;
};

type BackgroundImage = {
    type: 'image';
    imageUrl: string;
};

type BackgroundGradient = {
    type: 'gradient';
    firstColor: string;
    secondColor: string;
};

type SlideObject = TextObject | ImageObject;

type SlideItem = {
    id: string;
    position: Position;
    size: Size;
}

type TextObject = SlideItem & {
    type: 'text';
    content: string;
    fontFamily: string;
    fontColor: string;
    fontStyle: string;
    fontSize: number;
    textDecoration: string;
    fontWeight: string | number
};

type ImageObject = SlideItem & {
    type: 'image';
    imageUrl: string;
};

type Position = {
    x: number;
    y: number;
}

type Size = {
    width: number;
    height: number;
}

type ItemSelection = {
    selectedSlidesIds: string[];
    selectedObjectsIds: string[];
}

type EditorType = {
    presentation: Presentation;
    selection: ItemSelection;
}

export type {
    Presentation,
    Slide,
    SlideObject,
    ItemSelection,
    ImageObject,
    TextObject,
    Position,
    Size,
    BackgroundType,
    BackgroundImage,
    SlideItem,
    BackgroundColor,
    BackgroundGradient,
    EditorType,
}