import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const Form = styled.ScrollView`
  width: 100%;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  height: 60px;
  font-size: 15px;
  margin-bottom: 10px;
  padding-left: 15px;

  background-color: rgba(0, 0, 10, 0.4);
  border-radius: 4px;
  color: #fff;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;
