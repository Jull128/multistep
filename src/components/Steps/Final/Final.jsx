import React, { useState } from 'react'
import { useData } from '../../../context/StepperContext';

export const Final = () => {
    const [success, setSuccess] = useState(false);
    const { data } = useData();

    const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
    const { files } = data;

    const onSubmit = async () => {
        const formData = new FormData();
        if (data.files) {
            data.files.forEach((file) => {
                formData.append("files", file, file.name);
            });
        }

        entries.forEach((entry) => {
            formData.append(entry[0], entry[1]);
        });

        const res = await fetch("https://api.sbercloud.ru/content/v1/bootcamp/frontend", {
            method: "POST",
            body: formData,
        });

        if (res.status === 200) {
            setSuccess(true);
            return (
                <div>
                    Ehf
                </div>
            )

        }
    };


    // return (
    //     <div>
    //         Ehf
    //     </div>
    // )
}

