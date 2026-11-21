document.querySelectorAll('.paper-list article > p').forEach((authors) => {
  authors.innerHTML = authors.innerHTML
    .replaceAll('Zhang, Hugan', '<strong>Zhang, Hugan</strong>')
    .replaceAll('Zhang, H. G.', '<strong>Zhang, H. G.</strong>')
    .replaceAll('章沪淦', '<strong>章沪淦</strong>');
});

const journalImpactFactors = [
  ['IEEE Transactions on Vehicular Technology', '7.5', '中科院2区', false, 'JCR Q1'],
  ['IEEE Transactions on Systems, Man, and Cybernetics: Systems', '8.4', '中科院1区', true, 'JCR Q1'],
  ['Journal of Marine Science and Engineering', '3.2', '中科院3区', false, 'JCR Q2'],
  ['Proceedings of the Institution of Mechanical Engineers, Part M', '1.8', '中科院4区', false, 'JCR Q2'],
  ['Ships and Offshore Structures', '1.7', '中科院4区', false, 'JCR Q2'],
  ['Asian Journal of Control', '2.0', '中科院小区3区', false, 'JCR Q3'],
  ['ISA Transactions', '6.6', '中科院小区1区', true, 'JCR Q1'],
  ['Ocean Engineering', '6.3', '中科院2区', true, 'JCR Q1'],
];

document.querySelectorAll('.year-group .paper-list cite').forEach((journal) => {
  const match = journalImpactFactors.find(([name]) => journal.textContent.includes(name));
  if (!match) return;

  const zoneBadge = document.createElement('span');
  zoneBadge.className = 'cas-badge';
  zoneBadge.textContent = match[2];
  zoneBadge.title = `2025年中科院期刊分区表升级版：${match[2]}`;

  const topBadge = document.createElement('span');
  topBadge.className = 'top-badge';
  topBadge.textContent = '★ TOP';

  const jcrBadge = document.createElement('span');
  jcrBadge.className = 'jcr-badge';
  jcrBadge.textContent = match[4];

  const badge = document.createElement('span');
  badge.className = 'if-badge';
  badge.textContent = `IF ${match[1]}`;
  badge.title = `2025 Journal Impact Factor：${match[1]}`;
  const badges = match[3] ? [zoneBadge, topBadge, jcrBadge, badge] : [zoneBadge, jcrBadge, badge];
  journal.closest('article').querySelector('h3').append(...badges);
});
