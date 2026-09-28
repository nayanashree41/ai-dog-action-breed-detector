// ---- Simple page navigation ----

const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');

navBtns.forEach(b => b.addEventListener('click', () => {

  navBtns.forEach(x => x.classList.remove('active'));

  b.classList.add('active');

  const target = b.getAttribute('data-page');

  pages.forEach(p =>
    p.classList.toggle('active', p.id === target)
  );

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}));


// ---- Image previews ----

function previewFile(inputEl, imgEl, wrapEl) {

  const file =
    inputEl.files && inputEl.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = e => {

    imgEl.src = e.target.result;

    wrapEl.classList.remove('hidden');

  };

  reader.readAsDataURL(file);
}


// =====================================================
// ACTION DETECTOR
// =====================================================

const actionUpload =
  document.getElementById('actionUpload');

const actionPreview =
  document.getElementById('actionPreview');

const actionPreviewWrap =
  document.getElementById('actionPreviewWrap');

const actionResult =
  document.getElementById('actionResult');


actionUpload.addEventListener('change', () => {

  previewFile(
    actionUpload,
    actionPreview,
    actionPreviewWrap
  );

});


document
  .getElementById('runActionBtn')
  .addEventListener('click', () => {

    if (!actionUpload.files.length) {

      alert('Please upload an image.');

      return;
    }

    /*
      DEMO ONLY

      This is NOT real AI detection.

      Replace this section with your
      ML backend/API when your model is ready.
    */

    const actions = [
      'Sitting',
      'Standing',
      'Lying Down',
      'Playing'
    ];

    const pick =
      actions[
        Math.floor(Math.random() * actions.length)
      ];

    actionResult.textContent =
      `🐾 Action Detected: ${pick}`;

    addSnapshot(actionPreview.src);

  });


// =====================================================
// BREED + EMOTION
// =====================================================

const breedUpload =
  document.getElementById('breedUpload');

const breedPreview =
  document.getElementById('breedPreview');

const breedPreviewWrap =
  document.getElementById('breedPreviewWrap');

const breedResult =
  document.getElementById('breedResult');


breedUpload.addEventListener('change', () => {

  previewFile(
    breedUpload,
    breedPreview,
    breedPreviewWrap
  );

});


document
  .getElementById('runBreedBtn')
  .addEventListener('click', () => {

    if (!breedUpload.files.length) {

      alert('Please upload an image.');

      return;
    }

    /*
      DEMO ONLY

      This randomly selects a breed/emotion.
      It does not actually analyze the image.
    */

    const breeds = [
      'Labrador Retriever',
      'Beagle',
      'German Shepherd',
      'Golden Retriever',
      'Pug'
    ];

    const emotions = [
      'happy and playful',
      'calm and relaxed',
      'alert and focused',
      'tired or resting'
    ];

    const b =
      breeds[
        Math.floor(Math.random() * breeds.length)
      ];

    const e =
      emotions[
        Math.floor(Math.random() * emotions.length)
      ];

    breedResult.innerHTML =
      `<strong>Breed:</strong> ${b}
       <br/>
       <strong>Emotion:</strong> ${e}`;

    addSnapshot(breedPreview.src);

  });


// =====================================================
// COMPARE
// =====================================================

const c1 =
  document.getElementById('compare1');

const c2 =
  document.getElementById('compare2');

const c1Img =
  document.getElementById('compare1Img');

const c2Img =
  document.getElementById('compare2Img');

const c1Wrap =
  document.getElementById('compare1Wrap');

const c2Wrap =
  document.getElementById('compare2Wrap');


c1.addEventListener('change', () => {

  previewFile(
    c1,
    c1Img,
    c1Wrap
  );

});


c2.addEventListener('change', () => {

  previewFile(
    c2,
    c2Img,
    c2Wrap
  );

});


document
  .getElementById('runCompareBtn')
  .addEventListener('click', () => {

    if (
      !c1.files.length ||
      !c2.files.length
    ) {

      alert('Please upload both images.');

      return;
    }

    /*
      DEMO ONLY
    */

    const sim =
      (Math.random() * 50 + 50).toFixed(2);

    document.getElementById(
      'compareResult'
    ).textContent =
      `🧬 Breed Similarity: ${sim}%`;

  });


// =====================================================
// PROGRESS CHART
// =====================================================

const ctx =
  document
    .getElementById('progressChart')
    .getContext('2d');


let demoData = {

  labels: [
    'Sitting',
    'Standing',
    'Lying Down',
    'Playing'
  ],

  counts: [
    2,
    5,
    1,
    4
  ]

};


let chart = new Chart(ctx, {

  type: 'bar',

  data: {

    labels: demoData.labels,

    datasets: [
      {
        label: 'Detections Count',
        data: demoData.counts
      }
    ]

  },

  options: {

    responsive: true,

    maintainAspectRatio: false

  }

});


document
  .getElementById('resetProgress')
  .addEventListener('click', () => {

    demoData.counts = [
      0,
      0,
      0,
      0
    ];

    chart.data.datasets[0].data =
      demoData.counts;

    chart.update();

  });


// =====================================================
// SNAPSHOT HISTORY
// =====================================================

const snapshotGrid =
  document.getElementById('snapshotGrid');

const snapshots = [];


function addSnapshot(dataUrl) {

  if (!dataUrl) return;

  snapshots.push(dataUrl);

  renderSnapshots();

}


function renderSnapshots() {

  snapshotGrid.innerHTML = '';

  snapshots.forEach((s, i) => {

    const img =
      document.createElement('img');

    img.src = s;

    img.alt =
      `Snapshot ${i + 1}`;

    img.className = 'snap';

    snapshotGrid.appendChild(img);

  });

}


// =====================================================
// ROUTINE FORM
// =====================================================

const routineForm =
  document.getElementById('routineForm');

const savedRoutine =
  document.getElementById('savedRoutine');


routineForm.addEventListener('submit', (e) => {

  e.preventDefault();

  const data = {

    Feeding:
      document.getElementById('feeding').value || '—',

    Walking:
      document.getElementById('walking').value || '—',

    Training:
      document.getElementById('training').value || '—',

    Bedtime:
      document.getElementById('bedtime').value || '—'

  };


  savedRoutine.textContent =
    `Saved Routine: Feeding ${data.Feeding} • ` +
    `Walking ${data.Walking} • ` +
    `Training ${data.Training} • ` +
    `Bedtime ${data.Bedtime}`;


  localStorage.setItem(
    'dogRoutine',
    JSON.stringify(data)
  );


  alert(
    'Routine saved (demo). Hook this to persist on server or calendar.'
  );

});


// =====================================================
// CLEAR ROUTINE
// =====================================================

document
  .getElementById('clearRoutine')
  .addEventListener('click', () => {

    localStorage.removeItem('dogRoutine');

    savedRoutine.textContent =
      'No routine saved yet.';

    routineForm.reset();

  });


// =====================================================
// LOAD STORED ROUTINE
// =====================================================

(function loadRoutine() {

  const r =
    localStorage.getItem('dogRoutine');

  if (!r) return;

  try {

    const data =
      JSON.parse(r);

    document.getElementById('feeding').value =
      data.Feeding;

    document.getElementById('walking').value =
      data.Walking;

    document.getElementById('training').value =
      data.Training;

    document.getElementById('bedtime').value =
      data.Bedtime;


    savedRoutine.textContent =
      `Saved Routine: Feeding ${data.Feeding} • ` +
      `Walking ${data.Walking} • ` +
      `Training ${data.Training} • ` +
      `Bedtime ${data.Bedtime}`;

  } catch (error) {

    console.error(
      'Error loading routine:',
      error
    );

    localStorage.removeItem('dogRoutine');

  }

})();
