import Markdown from 'react-markdown'
import { createRoot } from 'react-dom/client'
import rehypeRaw from 'rehype-raw'
import React, { useEffect } from 'react';


export const LoadAndRenderHTML = (htmlFilePath, targetElementId, assertsFilePath) => {

    var apiData = null;

    useEffect(() => {

        const loadHTML = async () => {
            const result = await fetch(htmlFilePath);
            const htmlContent = await result.text();
            if (document.getElementById(targetElementId) !== null) {
                document.getElementById(targetElementId).innerHTML = htmlContent;

                if (apiData.markdown.length > 0) {
                    loadMarkdowm();
                }
            }
        }


        const loadMarkdowm = async () => {
            for (const markdownFilePath of apiData.markdown) {
                const result = await fetch(markdownFilePath);
                const markdownContent = await result.text();
                var elementId = markdownFilePath.split('/').pop().split('.')[0];
                if ((document.getElementById(elementId) !== null) && markdownContent !== '') {
                    createRoot(document.getElementById(elementId)).render(<Markdown rehypePlugins={[rehypeRaw]}>{markdownContent}</Markdown>);
                }
            }
        }

        const loadCSS = async () => {
            const result = await fetch(apiData.stylesheet);
            const styleSheetContent = await result.text();
            const styleElement = document.createElement('style');
            styleElement.innerHTML = styleSheetContent;
            document.head.appendChild(styleElement);
            loadHTML();

        }

        fetch(assertsFilePath)
            .then(response => response.json())
            .then(contentData => {
                if (contentData !== null) {
                    apiData = contentData;
                    if (apiData.stylesheet !== null) {
                        loadCSS();
                    } else {
                        loadHTML();
                    }
                }
            })
            .catch(error => console.error('Error loading stylesheet file:', error));
    }, []);
}
