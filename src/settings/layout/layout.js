import UI from 'editor-ui-lib';
import React from 'react'
import Wix from 'Wix';
import _ from 'lodash';

const teamNames = [
    "Russia",
    "Saudi Arabia",
    "Egypt",
    "Uruguay",
    "Portugal",
    "Spain",
    "Morocco",
    "Iran",
    "France",
    "Australia",
    "Peru",
    "Denmark",
    "Argentina",
    "Iceland",
    "Croatia",
    "Nigeria",
    "Brazil",
    "Switzerland",
    "Costa Rica",
    "Serbia",
    "Germany",
    "Mexico",
    "Sweden",
    "South Korea",
    "Belgium",
    "Panama",
    "Tunisia",
    "England",
    "Poland",
    "Senegal",
    "Colombia",
    "Japan"
];

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {
            teamsToShow: [],
            selectedTeams: []
        }
    }
    
    componentDidMount() {
        Wix.Data.Public.get('Teams', {scope: Wix.Data.SCOPE.COMPONENT}, data => {
            console.log(data);
           this.setState({
               selectedTeams: JSON.parse(data.Teams)
           }) 
        });

    }

    onTeamChange(newVal, team) {
        let teams = this.state.selectedTeams;
        if (newVal) {
            if (!teams.includes(team)) teams.push(team)
        } else {
            teams = _.reject(teams, item => item === team);
        }
        this.setState({
            selectedTeams: teams,
            teamsToShow: []
        });
        Wix.Data.Public.set('Teams', JSON.stringify(teams), { scope: 'COMPONENT' });
    }
    updateTeams(value) {
        if (!value) {
            this.setState({
              teamsToShow: []
            });
            return;
        }
        this.setState({
            teamsToShow: teamNames.filter(team => _.startsWith(team.toLowerCase(), value.toLowerCase()))
        })
    }
    isTeamSelected(team) {
        return this.state.selectedTeams.includes(team);
    }
    render() {
        return (
            <div>
                <hr className="divider-long"/>
                <UI.sectionDividerLabeled label="How does this feed look?"/>
                <hr className="divider-long"/>



                <UI.slider
                    title="Columns"
                    min={1}
                    max={10}
                    defaultValue={4}
                    onChange={(newVal) => {
                        Wix.Data.Public.set('Columns', newVal, { scope: 'COMPONENT' })
                    }}/>

                <hr className="divider-long"/>

                <UI.textInput
                    title="Select Teams"
                    placeholder="Type a team"
                    onChange={value => this.updateTeams(value)}/>

                <div>
                    {this.state.teamsToShow.map(team =>
                <UI.checkbox
                        label={team}
                        defaultValue={this.isTeamSelected(team)}
                        onChange={newVal => this.onTeamChange(newVal, team)}/>)}

                </div>
                <hr className="divider-long"/>

                <div>
                    {this.state.selectedTeams.map(team =>
                        <UI.checkbox
                            label={team}
                            defaultValue={true}
                            onChange={newVal => this.onTeamChange(newVal, team)}/>)}

                </div>




            </div>
        )
    }
}