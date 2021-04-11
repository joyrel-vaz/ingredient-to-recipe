import React,{useState , useEffect } from 'react';
import { useParams } from "react-router-dom";
import {Card} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import './Ailment.css'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
});

function HomeRemedies(props) {
    const [remedies,setRemedies]=useState([])
    const {a_name} = useParams();
    const state = props.location.state;
    const classes = useStyles(); 
  
    let list = [];
    state.forEach((d) => { 
      if(d.ailment_name === a_name)
        list.push(d);
    })
    
    useEffect(() => {
      setRemedies(list);
    },[]);
    

  return (
        <div>
          <h1 style={{paddingTop:'2rem'}}><center>Home remedies for {a_name}</center></h1>
            { 
                  remedies.map(r => 
                    <Card style={{marginTop:"1rem"}}>
                    <Card.Header as="h5" className={classes.root} >Remedy</Card.Header>
                    <Card.Body>
                      <Card.Text>
                  <p key={r.methods}>{r.methods}</p>
                      </Card.Text>
                  </Card.Body>
                </Card>
                  )
            }
        </div>
  );
}

export default HomeRemedies;