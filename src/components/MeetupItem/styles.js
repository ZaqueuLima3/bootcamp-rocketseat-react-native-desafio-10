import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 10px;
  overflow: hidden;

  background: #e1e1e1;
  border-radius: 4px;
`;

export const ImageMeetup = styled.Image`
  width: 100%;
  height: 150px;
`;

export const Section = styled.View`
  padding: 10px 20px;
`;

export const Title = styled.Text`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.8);
`;

export const Infos = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const InfosText = styled.Text`
  margin-left: 5px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
`;
