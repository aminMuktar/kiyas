import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function GridGallery({ images }) {
    const [imagesShownArray, setImagesShownArray] = useState(
        Array(images.length).fill(false)
    );

    const imageVisibleChange = (index, isVisible) => {
        if (isVisible) {
            setImagesShownArray((currentImagesShownArray) => {
                currentImagesShownArray[index] = true;
                return [...currentImagesShownArray];
            });
        }
    };

    return (
        <div className="px-10 grid sm:grid-cols-3 gap-3 ">
            {images &&
                images.map((imageUrl, index) => (
                    <VisibilitySensor
                        key={index}
                        partialVisibility={true}
                        offset={{ bottom: 80 }}
                        onChange={(isVisible) => imageVisibleChange(index, isVisible)}
                    >
                        <GridGalleryCard
                            imageUrl={imageUrl}
                            show={imagesShownArray[index]}
                        />
                    </VisibilitySensor>
                ))}
        </div>
    );
}

function GridGalleryCard({ imageUrl, show }) {
    return (
        <div
            className={`relative transition ease-in duration-200 transform ${show ? "" : "translate-y-16 opacity-0"
                }`}
        >
            <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
                    Hello World
                </div>
            </div>
            <img src={imageUrl} alt="" />
        </div>
    );
}
