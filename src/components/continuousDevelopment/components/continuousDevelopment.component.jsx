import React, { Component } from 'react';
import { Grid, Card, CardContent, CardHeader, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';
import config from '../../../config/config';

class ContinuousDevelopment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobList: [
        {
          "commit": {
            "author_email": "admin@example.com",
            "author_name": "Administrator",
            "created_at": "2015-12-24T16:51:14.000+01:00",
            "id": "0ff3ae198f8601a285adcf5c0fff204ee6fba5fd",
            "message": "Test the CI integration.",
            "short_id": "0ff3ae19",
            "title": "Test the CI integration."
          },
          "coverage": null,
          "created_at": "2015-12-24T15:51:21.727Z",
          "started_at": "2015-12-24T17:54:24.729Z",
          "finished_at": "2015-12-24T17:54:24.921Z",
          "duration": 0.192,
          "artifacts_expire_at": "2016-01-23T17:54:24.921Z",
          "id": 6,
          "name": "rspec:other",
          "pipeline": {
            "id": 6,
            "ref": "master",
            "sha": "0ff3ae198f8601a285adcf5c0fff204ee6fba5fd",
            "status": "pending"
          },
          "ref": "master",
          "artifacts": [],
          "runner": null,
          "stage": "test",
          "status": "failed",
          "tag": false,
          "web_url": "https://example.com/foo/bar/-/jobs/6",
          "user": {
            "id": 1,
            "name": "Administrator",
            "username": "root",
            "state": "active",
            "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=80&d=identicon",
            "web_url": "http://gitlab.dev/root",
            "created_at": "2015-12-21T13:14:24.077Z",
            "bio": null,
            "location": null,
            "public_email": "",
            "skype": "",
            "linkedin": "",
            "twitter": "",
            "website_url": "",
            "organization": ""
          }
        },
        {
          "commit": {
            "author_email": "admin@example.com",
            "author_name": "Administrator",
            "created_at": "2015-12-24T16:51:14.000+01:00",
            "id": "0ff3ae198f8601a285adcf5c0fff204ee6fba5fd",
            "message": "Test the CI integration.",
            "short_id": "0ff3ae19",
            "title": "Test the CI integration."
          },
          "coverage": null,
          "created_at": "2015-12-24T15:51:21.802Z",
          "started_at": "2015-12-24T17:54:27.722Z",
          "finished_at": "2015-12-24T17:54:27.895Z",
          "duration": 0.173,
          "artifacts_file": {
            "filename": "artifacts.zip",
            "size": 1000
          },
          "artifacts": [
            {"file_type": "archive", "size": 1000, "filename": "artifacts.zip", "file_format": "zip"},
            {"file_type": "metadata", "size": 186, "filename": "metadata.gz", "file_format": "gzip"},
            {"file_type": "trace", "size": 1500, "filename": "job.log", "file_format": "raw"},
            {"file_type": "junit", "size": 750, "filename": "junit.xml.gz", "file_format": "gzip"}
          ],
          "artifacts_expire_at": "2016-01-23T17:54:27.895Z",
          "id": 7,
          "name": "teaspoon",
          "pipeline": {
            "id": 6,
            "ref": "master",
            "sha": "0ff3ae198f8601a285adcf5c0fff204ee6fba5fd",
            "status": "pending"
          },
          "ref": "master",
          "artifacts": [],
          "runner": null,
          "stage": "test",
          "status": "failed",
          "tag": false,
          "web_url": "https://example.com/foo/bar/-/jobs/7",
          "user": {
            "id": 1,
            "name": "Administrator",
            "username": "root",
            "state": "active",
            "avatar_url": "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=80&d=identicon",
            "web_url": "http://gitlab.dev/root",
            "created_at": "2015-12-21T13:14:24.077Z",
            "bio": null,
            "location": null,
            "public_email": "",
            "skype": "",
            "linkedin": "",
            "twitter": "",
            "website_url": "",
            "organization": ""
          }
        }
      ],    
    };
  };

  componentDidMount = () => {
    axios.get(config.path + '/jobs', { 
      headers: {
        'Private-Token': config.privateToken
      }
    })
    .then((res) => {
      // this.setState({ jobList: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    const { jobList } = this.state;
    console.log(jobList);
    
    return (
      <Grid item xs={4}>
        <Card>
          <CardHeader title="CI/CD" />
          <CardContent>
            {jobList.map(job => (
              <ListItem key={job.id}>
              {/* switch (job.status) {
                case 'failed':
                  'failed'
                  break;

                case 'pending':
                  'pending'
                  break;

                case 'success':
                  'success'
                  break;
              
                default:
                  break;
              } */}
                <ListItemText primary={job.commit.message} />
              </ListItem>
            ))}
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default ContinuousDevelopment;