import React from 'react';
import { useState } from 'react';
function BackgroundColorChange() {


  return (
  <>
  <h2>Background Color Change Example</h2>
  <input type="color" onChange={(e) => alert(e.target.value)} />
  </>
  );
}
export default BackgroundColorChange;