import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/61/61/1',
  'name': '안기준',
  'birthday': '920528',
  'gender': '남자',
  'job': '리액트공부중'
},
{
  'id': 2,
  'image': 'https://placeimg.com/61/61/2',
  'name': '김지현',
  'birthday': '910510',
  'gender': '여자',
  'job': 'backEnd뭐하지'
},
{
  'id': 3,
  'image': 'https://placeimg.com/61/61/3',
  'name': '지승연',
  'birthday': '950601',
  'gender': '미확인',
  'job': 'DB뭐쓰지'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
            );
          }) 
        }
    </div>
    )
  }
}

export default App;
