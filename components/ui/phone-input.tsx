import * as React from 'react';
import 'react-phone-input-2/lib/style.css'
import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

const CustomPhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ ...props} : any, ref) => {
    return (
      <PhoneInput
        inputClass="bg-transparent file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground w-full h-full focus:outline-none"
        buttonStyle={{
            border: 'none',
            background: 'none',
            paddingLeft: '10px',
        }}
        dropdownStyle={{
            fontSize: '14px',
        }}
        placeholder='123-456-780'
        // 'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        ref={ref}
        {...props}
      />
    );
  }
);
CustomPhoneInput.displayName = 'PhoneInput';

export { CustomPhoneInput };
