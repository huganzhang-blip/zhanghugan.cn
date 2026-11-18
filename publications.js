document.querySelectorAll('.paper-list article > p').forEach((authors) => {
  authors.innerHTML = authors.innerHTML
    .replaceAll('Zhang, Hugan', '<strong>Zhang, Hugan</strong>')
    .replaceAll('Zhang, H. G.', '<strong>Zhang, H. G.</strong>')
    .replaceAll('章沪淦', '<strong>章沪淦</strong>');
});
