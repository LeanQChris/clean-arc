import React from "react";

interface ErrorMessageProps {
    error: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
    return (
        <div className="text-red-500">
            {error}
        </div>
    );
};
export default ErrorMessage;