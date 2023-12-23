function Compile(){
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;

    const resultFrame = document.createElement('iframe');
    resultFrame.style.width = '100%';
    resultFrame.style.height = '100%';
    resultFrame.style.border = 'none';

    document.body.appendChild(resultFrame);

    const resultDocument = resultFrame.contentDocument;
    const resultBody = resultDocument.body;

    resultBody.innerHTML = `
      <style>${cssCode}</style>
      ${htmlCode}
      <script>${jsCode}</script>
    `;
}
