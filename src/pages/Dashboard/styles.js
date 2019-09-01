import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 30px 0 0;
`;

export const Head = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const DateText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin: 0 10px;
`;

export const MeetupList = styled.FlatList`
  flex-direction: column;
  width: 100%;
  padding: 0 20px 0;
  margin-bottom: 90px;
`;
