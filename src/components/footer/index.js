import React, { useEffect, useState } from 'react';

import { ButtonGroup } from 'react-bootstrap';
import { Avatar, AvatarGroup, Button } from '@mui/material';
import GithubApi from '../../api/index';

export default function Footer(props) {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    (async () => {
      const contri = await GithubApi.getContributors();
      setContributors(contri || []);
    })();
  }, [props]);

  return (
    <footer
      style={{
        textAlign: 'center',
        color: '#dbe8d9',
      }}
    >
      <div className="row justify-content-center">
        <a
          href="https://github.com/genialkartik/hacktoberfest-checker/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Contributors
        </a>
      </div>
      <div style={{ marginBlock: 20 }} className="row justify-content-center">
        <AvatarGroup max={contributors.length || 2}>
          {contributors?.map((contrib, idx) => (
            <Avatar alt={contrib.login} key={idx} src={contrib.avatar_url} />
          ))}
        </AvatarGroup>
      </div>
      <div style={{ marginBlock: 20 }} className="row justify-content-center">
        Attention : This site is just a fan made and it is not affiliated by
        <a
          style={{marginLeft: 4, marginTop: 1}}
          href="https://hacktoberfest.digitalocean.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hacktoberfest
        </a>
      </div>
      <div className="row justify-content-center">
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            sx={{ color: '#ff4400' }}
            href='/blog'
            target="_blank"
          >
            Blog
          </Button>
          <Button
            sx={{ color: '#ff4400' }}
            href='http://github.com/genialkartik/hacktoberfest-checker'
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            sx={{ color: '#ff4400' }}
            href='https://hacktoberfest.digitalocean.com/'
            target="_blank"
          >
            Participate
          </Button>
        </ButtonGroup>
      </div>
    </footer>
  );
}
