let verbsContainer = getElementById('verbs-container');

/**
 * Tum fiilleri render eder.
 */
verbsContainer.innerHTML = verbList
  .map((verb) => {
    return `
    <tr>
        <th>${verb.verbPresentSimple}</th>
        <td>${verb.verbPastSimple}</td>
        <td>${verb.verbPastParticiple}</td>
        <td>${verb.verbPresentSimplePronunciation}</td>
        <td>${verb.verbPastSimplePronunciation}</td>
        <td>${verb.verbPastParticiplePronunciation}</td>
        <td>${verb.verbItalian}</td>
        <td>${verb.verbTurkish}</td>
    </tr>
    `;
  })
  .join('');
