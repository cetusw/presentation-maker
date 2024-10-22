function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = url;

        image.onload = () => {
            resolve(image);
        };

        image.onerror = (err) => {
            reject(`Failed to load image: ${err}`);
        };
    });
}

export {
    loadImage,
}