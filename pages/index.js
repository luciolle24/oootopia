import styled from 'styled-components';
const Box1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  margin: 0px -8.5px;
`;
const Box1_all = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 20%;
  width: ${({ width }) => width};
  margin: 40px;
  margin-top: none;
  padding: 40px;
  color: ${({ color }) => color};
  text-align: justify;
  border-radius: 25px;
`;

export default function Home() {
  return (
    <>
      <Box1>
        <Box1_all width="100%" backgroundColor="#333" color="white">
          <h1>Who are we</h1>
          <p>
            Our team is fully doxxed. The founder of this project, is best known
            as zuda, and discord is Zombiehacker. Zuda's real name is Ryan
            Satterfield and lives in California, near LA. <br />
            <br />
            Oootopia kids is owned by Planet Zuda, LLC. Ryan Satterfield has
            been programming since he was 8 years old and is 36 years old, and
            has been coding games and cyber security professionally since 2007.{' '}
            <br />
            <br />
            Ryan Satterfield co-founded a search engine helping with homework
            and any problems in 2000 called Cheetasearch during the great search
            engine wars at the age of 13, that got a buy out offer. <br />
            <br />
            The inspiration for Pooptopia was the idea of a better looking Poop
            character, but than his then 9 year old niece wanted a mommy poop, a
            daddy poop, and inspiration struck. Pooptopia was born. As an uncle
            who cares about what his niece and cousins play appropiate roblox
            worlds, when they reached out complaining about the games available.{' '}
            <br />
            <br />
            Roblox is full of inappropriate games, our goal is to create a hand
            curated experience for kids, with parents as a focus point, not an
            after thought. Our independent contractor community manager and
            community outreach is currently ahauvomica, who is privately doxxed.
            Ahau has children, which makes him excellent for this role and a
            great second pair of eyes on projects we are contacting to join our
            metaverse.
          </p>
        </Box1_all>
      </Box1>
    </>
  );
}
