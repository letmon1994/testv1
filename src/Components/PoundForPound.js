import React from 'react';
import axios from 'axios';
import ReactTable from "react-table";

class PoundForPound extends React.Component {
        constructor () {
            super();

            this.state = {
                tableData: [{
                    id:'',
                    nickname:'',
                    wins:'',
                    statid:'',
                    losses:'',
                    last_name:'',
                    weight_class:'',
                    title_holder:'',
                    draws:'',
                    first_name:'',
                    fighter_status:'',
                    rank:'',
                    pound_for_pound_rank:'',
                    thumbnail:'',
                    belt_thumbnail:'',
                    left_full_body_image:'',
                    right_full_body_image:'',
                    profile_image:'',
                    link:'',
                }],
            };
        }

        componentDidMount () {
            axios.get('https://cors-anywhere.herokuapp.com/http://ufc-data-api.ufc.com/api/v3/iphone/fighters', {
            	responseType: 'json'
            }).then(response => {
                this.setState({ tableData: response.data });
            });
        }

        render () {
            const { tableData } = this.state;

            return (
              <div>
              <ReactTable
							data={tableData}
							columns={[
                                {
                                    Header: 'Names',
                                    columns: [
                                        {
                                            Header: 'First Name',
                                            accessor: 'first_name',
                                        },
                                        {
                                            Header: 'Last Name',
                                            id: 'lastName',
                                            accessor: d => d.last_name,
                                        },
                                    ],
                                },
                                {
                                    Header: 'Fights',
                                    columns: [
                                        {
                                            Header: 'Wins',
                                            accessor: 'wins',
                                        },
                                        {
                                          Header: 'Draws',
                                          accessor: 'draws',
                                      },
                                      {
                                            Header: 'Losses',
                                            accessor: 'losses',
                                        },
                                    ],
                                },
                                {
                                    Header: 'Pound for Pound Ranks',
                                    columns: [
                                        {
                                            Header:  'Rank',
                                            accessor: 'pound_for_pound_rank',
                                        },
                                    ],
                                },
                            ]}
							defaultPageSize={12}
							className="-striped -highlight"
					/></div>
          );
      }
};

    export default PoundForPound;
