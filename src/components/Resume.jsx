import React from 'react'

function Resume() {
    return (
        <div>
            <h2 className='text-4xl md:text-4xl mb-1 md:mb-3 font-bold'>Resume</h2>
            <embed src="assets/cv-2.0.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" width="100%" height="1140px" />

        </div>
    )
}

export default Resume;