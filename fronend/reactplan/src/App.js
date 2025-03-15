import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Plan from './Plan'
import axios from 'axios'

//Axios Instance
const ai=axios.create({
  baseURL:'http://127.0.0.1:8000/api'
})


 class App extends Component {
  state={
    items: [],
    text: "",
  }
  showPlan = () =>{
    ai.get('/list/')
    .then((res)=> {
      this.setState({items: res.data})
    })
  }

  addPlan=(d) =>{
    if (this.state.text !==""){
      ai.post('/create/',d)
      .then((res)=>{
        this.setState({ text: ''})
        this.showPlan()
      })
    }
  }
  handleChange = e =>{
    this.setState({text: e.target.value })
  }
  handleAdd = e => {
   let dt={item: this.state.text}
   this.addPlan(dt)

  }
  handleDelete = id => {
    console.log("Deleted", id);
    // const Olditems = [...this.state.items]
    // console.log("Olditems", Olditems);
    // const items = Olditems.filter((element, i) => {
    //   return i !== id
    // })
    // console.log("Newitems", items);
    // this.setState({ items: items });
    ai.delete(`/delete/${id}`)
    .then((res) => {
      this.showPlan();
    })
    .catch((error) => {
      console.error('There was an error deleting the item!', error);
    });

  }
  componentDidMount() {
    this.showPlan();
  }
  render() {
    return (
      <div className='container-fluid my-5'>
        <div className='row'>
          <div className='col-sm-6 mx-auto text-white
          shadow-lg p-3'> 
          <h1 className='text-center '>Today's Plan</h1>
          <div className="row">
            <div className="col-9">
              <input type="text" className='form-control' placeholder='Write Your Plan Here' value={this.state.text}
              onChange={this.handleChange} />

            </div>
            <div className="col-2">
              <button className='btn btn-warning px-5 font-weight-bold' onClick={this.handleAdd}> Add</button>
            </div>
            <div className="container">
              <ul className="list-unstyled row m-5">
                {/* {console.log("State Item", this.state.items)} */}
               {
                 this.state.items.map((value, i) => {
                  // console.log(value.id,value.item)
                  return <Plan key={i} id={value.id} value={value.item} sendData={this.handleDelete} />
                 })
               }
              </ul>
               {/* <ul className="list-unstyled row m-5">
                  <Plan p={this.state.items} sendData={this.handleDelete} />
                </ul> */}
            </div>
          </div>
          </div>
        </div>

      </div>
    )
  }
}
export default App;
