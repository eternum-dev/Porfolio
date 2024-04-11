import emailjs from '@emailjs/browser';



const myName = 'Alejandro'

export const sendEmail = (formState) => {
    emailjs
        .send('service_zrxli9i',
            'template_pohcepq',
            { to_name: myName, ...formState },
            { publicKey: 'cvGSDhlMofn5MHcZK', })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log(formState);
                console.log('FAILED...', error.text);
            },
        );
}