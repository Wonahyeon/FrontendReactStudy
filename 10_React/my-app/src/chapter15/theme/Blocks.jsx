import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  /* background-color: lightgray; */
  /* 테마 사용해보기 */
  background-color: ${props => props.theme.grayBg};

  /* 반응형 */
  @media screen and (max-width: 1024px) {
    width: 613px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 613px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const Block = styled.div`
  padding: ${props => props.padding};
  border: 1px solid black;
  border-radius: 1rem;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  
  &:hover {
    background-color: white;
    color: ${props => props.backgroundColor};
  }
  
  /* & + & {
    margin-left: 2rem;
  } */

  @media screen and (max-width: 613px) {
    margin-top: 30px;
  }
  `;

const NewBlock = styled(Block)`
  border-color: ${props => props.backgroundColor};
`;

const blockItems = [
  {
    label: '1',
    padding: '1rem',
    backgroundColor: 'red',
  },
  {
    label: '2',
    padding: '3rem',
    backgroundColor: 'green',
  },
  {
    label: '3',
    padding: '2rem',
    backgroundColor: 'blue',
  },
];


function Blocks(props) {
  return (
    <Wrapper>
      {blockItems.map((blockItem) => {
        return (
          <NewBlock
            key={blockItem.label}
            padding={blockItem.padding}
            backgroundColor={blockItem.backgroundColor}
            >
            {blockItem.label}
          </NewBlock>
        );
      })}
    </Wrapper>
  )
};

export default Blocks;