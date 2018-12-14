import React, { Component } from 'react';
import axios from 'axios';
import config from '../../../config/config';
import theme from '../../../config/theme';
import { Doughnut } from 'react-chartjs-2';

class DoughnutChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workInProgressTrue:'',
      workInProgressFalse:'',
    };
  };

  componentDidMount = () => {
    axios.get(config.path + '/merge_requests', { 
      headers: {
        'Private-Token': config.privateToken
      }
    })
    .then((res) => {

      const wipTrue = res.data.filter((el) => {
        return el.work_in_progress === true;
      });

      const wipFalse = res.data.filter((el) => {
        return el.work_in_progress === false;
      });

      this.setState({
        workInProgressTrue: wipTrue.length,
        workInProgressFalse: wipFalse.length
      });

    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const { workInProgressTrue , workInProgressFalse} = this.state;
    
    const data = (canvas) => {
      const ctx = canvas.getContext("2d")
      const gradient = ctx.createLinearGradient(0,0,100,0);
      return {
        backgroundColor: gradient,
        datasets: [{
          data: [workInProgressTrue, workInProgressFalse],
          backgroundColor: [theme.orange.orangeLight,theme.yellow.yellowBase]
        }],
        labels: [
          'Work in Progress',
          'Ready to be merged'
        ]
      }
    }

    const options = {
      maintainAspectRatio: false
    }

    return (
      <Doughnut
        data={data}
        option={options}
      />
    );
  }
}

export default DoughnutChart;


