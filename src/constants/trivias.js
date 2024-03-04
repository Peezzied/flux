const data = [
    {
        lead: '',
        img: ''
    },
    {
        lead: '',
        img: ''
    },
    {
        lead: '',
        img: ''
    },
    {
        lead: '',
        img: ''
    },
    {
        lead: '',
        img: ''
    }
]


export const trivias =(array)=> {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}