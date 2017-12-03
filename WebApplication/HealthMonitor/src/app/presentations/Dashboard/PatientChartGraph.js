import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import GlobalStyles from '../../styles.scss';

const PatientChartGraph = (props) => {

  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
    legend: {
      paddingTop: 20,
    },
    pieChartDiv: {
      height: 290,
      textAlign: 'center'
    }
  };
  return (
    <Paper style={styles.paper}>
      <span style={GlobalStyles.title}><div style={{ textAlign: 'center' }}> Patients Chart </div></span>

      <div style={GlobalStyles.clear} />

      <div className="row">

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <PieChart >
                <Pie label
                  innerRadius={80}
                  outerRadius={130}
                  data={props.data}
                  fill="#8884d8">
                  {
                    props.data.map((item) => <Cell key={item.name} fill={item.color} />)
                  }

                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div style={styles.legend}>
            <div style={styles.legend}>
              <List>
                {props.data.map((item) =>
                  <ListItem
                    key={item.name}
                    leftAvatar={
                      <Avatar icon={item.icon}
                        backgroundColor={item.color} />
                    }>
                    {item.name} - {item.value}
                  </ListItem>
                )}
              </List>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

PatientChartGraph.propTypes = {
  data: PropTypes.array
};

export default PatientChartGraph;
