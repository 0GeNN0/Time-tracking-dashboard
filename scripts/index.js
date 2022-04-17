const allH2 = document.querySelectorAll('h2')
const crntP = document.querySelectorAll('.current')
const prevP = document.querySelectorAll('.previous')
const selectionsP = document.querySelectorAll('.select')
const daily = document.querySelector('#daily')
const weekly = document.querySelector('#weekly')
const monthly = document.querySelector('#monthly')

const getData = async () => {
   const res = await fetch('scripts/data.json')
   const data = await res.json()
   return data
}

getData().then((data) => {
   // Adding active class to the selected par
   const addActive = (activePar) => {
      selectionsP.forEach((p) => {
         p.classList.remove('active')
      })
      activePar.classList.add('active')
   }

   // To display the daily data when get called
   const displayDaily = () => {
      for (let x = 0; x < data.length; x++) {
         allH2[x].textContent = data[x].title
         crntP[x].textContent = `${data[x].timeframes.daily.current}hrs`
         prevP[x].textContent = `Yesterday - ${data[x].timeframes.daily.previous}hrs`
      }
   }

   // To display the week data when get called
   const displayWeekly = () => {
      for (let x = 0; x < data.length; x++) {
         allH2[x].textContent = data[x].title
         crntP[x].textContent = `${data[x].timeframes.weekly.current}hrs`
         prevP[x].textContent = `Last Week - ${data[x].timeframes.weekly.previous}hrs`
      }
   }

   // To display the monthly data when get called
   const displayMonthly = () => {
      for (let x = 0; x < data.length; x++) {
         allH2[x].textContent = data[x].title
         crntP[x].textContent = `${data[x].timeframes.monthly.current}hrs`
         prevP[x].textContent = `Last Month - ${data[x].timeframes.monthly.previous}hrs`
      }
   }

   addActive(weekly)
   displayWeekly()

   daily.addEventListener('click', (e) => {
      addActive(daily)
      displayDaily()
   })
   
   weekly.addEventListener('click', (e) => {
      addActive(weekly)
      displayWeekly()
   })
   
   monthly.addEventListener('click', (e) => {
      addActive(monthly)
      displayMonthly()   
   })
})



