import React from 'react';
import CodePin from 'react-native-pin-code'

export default function LoginPage() {
  return (
    <CodePin
      code="TEST"
      text="Enter PIN code"
      error="Wrong PIN code"
      autoFocusFirst={false}
    />
  );
}
