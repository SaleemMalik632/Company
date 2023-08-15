import React from 'react';
import FEQS from './FEQS'


const AllQuestion = () => {

    const CardData = [

        { Question: 'How To Apply For Internships?', Answer: 'To Apply For Upcoming Batch Of Internship You Need To Fill The Interest Form In Thst Specific Domain, After That You Will Directly Receive The Selection Certificate From Us If Selected.' },
        { Question: 'How To Fill The Interest Form?', Answer: 'You Will Get The Interest Form Of All The Internships Domain In Above Mentioned Internship Column. Please Click On Apply Now Button, Your Response Will Help Us To Understand Your Current Skills And Need For Training During The Internship If Any.' },
        { Question: ' I Have Completed All The Necessary Steps, Whats Next?', Answer: 'If You Have Filled All The Required Field In Interest Form Correctly, You Will Receive A Selection Certificate From Us Before Your Internship Starts. All Importent Information And Anouncements Related To Internship Are Communicated Through The Discussion From OASIS INFOBYTE Network On Linkedin.' },
        { Question: 'What Will Be The Duration Of Internship?', Answer: 'In Every Domain Duration Of Internship Is 4 Weeks.' },
        { Question: ' I Have Completed My Tasks Well Before Deadline.When Will I Get A Certificate?', Answer: 'You Can Submit Your Task Through Task Submission Form If You Have Received It Or Wait For It To Be Shared. If You Have Submitted The Task Before The Deadline Please Expect Your Completion Certificate In The 1st Week Of Next Month.' },
    ];
    return (
        <>
            <div style={{margin:'20px'}}>
                {
                    CardData.map((question, index) => {
                        return (
                            <FEQS CardData={question} key={index} />
                        )

                    })
                }

            </div>

        </>
    )
}

export default AllQuestion