import { useEffect, useState } from 'react';

export const useValidationMessage = (value: string, message: string) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (value) {
      setShowMessage(false);
    }
  }, [value]);

  const validate = () => {
    if (!value) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  return { showMessage, message, validate };
};
