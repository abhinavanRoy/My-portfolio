/* Hooks */
import { useState } from "react";

export const useDownloadResume = () => {
    const [isResumeDownloading, setResumeDownloading] = useState(false);

    const downloadResume = () => {
        setResumeDownloading(true);
        setTimeout(() => setResumeDownloading(false),2000);
    }
    return {downloadResume,isResumeDownloading}
};