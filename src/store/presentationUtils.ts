import {Presentation, Slide, ItemSelection, BackgroundType} from './presentationTypes.ts';

export function updateSlideIndex(presentation: Presentation, items: ItemSelection, newIndex: number): Presentation {
    const updatedSlides: Slide[] = [...presentation.slides];

    const slideIdToMove = items.selectedSlidesIds[0];
    const currentIndex: number = updatedSlides.findIndex(slide => slide.id === slideIdToMove);

    if (currentIndex === -1) {
        return presentation;
    }

    const [removedSlide] = updatedSlides.splice(currentIndex, 1);
    updatedSlides.splice(newIndex, 0, removedSlide);

    return {
        ...presentation,
        slides: updatedSlides,
    };
}

function findSelectedObject(presentation: Presentation, items: ItemSelection) {
    const slideIdToEdit: string = items.selectedSlidesIds[0];
    const objectIdToEdit: string = items.selectedObjectsIds[0];

    const slideToEdit = presentation.slides.find(slide => slide.id === slideIdToEdit);

    if (!slideToEdit) {
        return false;
    }

    const objectToEdit = slideToEdit.objects.find(object => object.id === objectIdToEdit);

    if (!objectToEdit || objectToEdit.type !== 'text') {
        return false;
    }

    return objectToEdit
}

function updateSlideBackground(presentation: Presentation, slideIdToEdit: string, newBackground: BackgroundType): Presentation {
    const slideToEdit = presentation.slides.find(slide => slide.id === slideIdToEdit);

    if (!slideToEdit) {
        return presentation;
    }

    const updatedSlide: Slide = {
        ...slideToEdit,
        background: newBackground,
    };

    const updatedSlides: Slide[] = presentation.slides.map(slide =>
        slide.id === slideIdToEdit ? updatedSlide : slide
    );

    return {
        ...presentation,
        slides: updatedSlides,
    };
}

export function updateBackgroundColor(presentation: Presentation, items: ItemSelection, newColor: string): Presentation {
    const slideIdToEdit: string = items.selectedSlidesIds[0];
    return updateSlideBackground(presentation, slideIdToEdit, {
        type: 'color',
        color: newColor,
    });
}

export function updateBackgroundImage(presentation: Presentation, items: ItemSelection, newUrl: string): Presentation {
    const slideIdToEdit: string = items.selectedSlidesIds[0];
    return updateSlideBackground(presentation, slideIdToEdit, {
        type: 'image',
        imageUrl: newUrl,
    });
}

export function updateBackgroundGradient(presentation: Presentation, items: ItemSelection, newFirstColor: string, newSecondColor: string): Presentation {
    const slideIdToEdit: string = items.selectedSlidesIds[0];
    return updateSlideBackground(presentation, slideIdToEdit, {
        type: 'gradient',
        firstColor: newFirstColor,
        secondColor: newSecondColor,
    });
}

export {
    findSelectedObject,
}