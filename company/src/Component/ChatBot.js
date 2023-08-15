import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';


const App_ = () => {
   
    const theme = {
        background: '#C9FF8F',
        headerBgColor: '#faad14',
        headerFontSize: '20px',
        botBubbleColor: '#45B39D ',
        headerFontColor: 'white',
        botFontColor: 'white',
        userBubbleColor: '#F5B041',
        userFontColor: 'white',
    };
    const steps = [

        { id: '1', message: 'Welcome to InfoPRO', trigger: '2' },
        { id: '2', message: 'Hi! Guest. Thanks for your interest. In case we get disconnected, Please provide your email address formore', trigger: 'Checkemail' },
        {
            id: 'Checkemail', user: true,
            validator: (value) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                    return true;
                }
                else {
                    return 'Please enter a valid email.';
                }
            },
            trigger: 'mailthanks',
        },
        {
            id: 'mailthanks',
            message: 'Thanks! Choose the Intenship  ',
            trigger: 'option',
        },
        {
            id: 'option',
            options:
                [
                    { value: 'Machine Learning', label: 'Machine Learning', trigger: 'Submit' },
                    { value: 'Artificial Intelligence', label: 'Artificial Intelligence', trigger: 'Submit' },
                    { value: 'React Js', label: 'React Js', trigger: 'Submit' },
                ],
        },
        {
            id: 'Submit',
            message: 'thankyou for showing your interest in   {previousValue} we will contact you as soom as possible bye ',
            end: true,
        },
    ];



    return (
        <div className="App">
            <ThemeProvider theme={theme} >
                <div className= "bot">
                <ChatBot headerTitle="Contact Us" steps={steps} floating={true}  />
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App_;