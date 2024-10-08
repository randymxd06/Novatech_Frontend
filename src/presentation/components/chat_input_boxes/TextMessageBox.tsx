import { FormEvent, useState } from "react";

interface Props {
    onSendMessage: (message: string) => void;
    placeholder?: string;
    disableCorrections?: boolean;
}

export const TextMessageBox = ({ onSendMessage, placeholder, disableCorrections = false }: Props) => {

    const [message, setMessage] = useState('');

    const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
        
        event.preventDefault();

        if(message.trim().length === 0) return;

        onSendMessage(message);

        setMessage('');

    }

    return (

        <form
            onSubmit={handleSendMessage}
            className="flex flex-row items-center h-16 rounded-xl w-full px-4"
        >
            {/* MESSAGE INPUT */}
            <div className="flex-grow">
                <div className="relative w-full">
                    <input
                        type="text"
                        autoFocus
                        name="message"
                        className="flex w-full border rounded-xl border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
                        placeholder={placeholder}
                        autoComplete={disableCorrections ? 'on' : 'off'}
                        autoCorrect={disableCorrections ? 'on' : 'off'}
                        spellCheck={disableCorrections ? 'true' : 'false'}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
            </div>
            {/* SEND BUTTON */}
            <div className="ml-4">
                <button className="btn-primary">
                    <span className="mr-2">Enviar</span>
                    <i className="fa-regular fa-paper-plane"></i>
                </button>
            </div>
        </form>

    )

}
