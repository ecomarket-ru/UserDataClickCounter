

async function fetchData () {
  let count = {
    MD: 'Загрузка',
    PP: 'Загрузка',
  }
  let responseMD = await axios.get('https://ecomarket-6bbe3.firebaseio.com/click-my-data.json').then(r=>r.data)
  let responsePP = await axios.get('https://ecomarket-6bbe3.firebaseio.com/click-profile-pic.json').then(r=>r.data)
  if (responseMD && responsePP) {
    count.MD = Object.keys(responseMD).length
    count.PP = Object.keys(responsePP).length
  }

  document.querySelector('#my-data').textContent = count.MD
  document.querySelector('#profile-pic').textContent = count.PP

  document
    .querySelector(count.MD > count.PP ? '#my-data' : '#profile-pic')
    .style.color = '#43b02a'
}

fetchData()


setInterval(()=>{
  fetchData()
}, 4000)
