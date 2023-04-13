import {setIsLogin} from '@Actions/auth';
import {changeTheme, ThemeState} from '@Actions/theme';
import {Button, Text, UpDownVote} from '@Atom/index';
import {Profile} from '@Atom/Profile';
import {useTheme} from '@Hooks/index';
import {navigateAndReset} from '@Navigators/utils';
import {Container, Content} from '@Organism/Basic';
import {Colors} from '@Theme/Variables';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {baseUrlHost} from 'src/Services/BaseURL';

const LoginContainer = props => {
  const {_changeTheme, _setIsLogin, currentStatus} = props;
  const {Common, Fonts, Gutters, Layout} = useTheme();
  const {t} = useTranslation();
  const [onClose, setOnClose] = useState(false);
  const onChangeClose = () => setOnClose(true);

  const onChangeTheme = ({theme, darkMode}: Partial<ThemeState>) => {
    _changeTheme({theme, darkMode});
  };

  useEffect(() => {
    console.log('baseUrlHost', baseUrlHost);
  }, []);

  return (
    <Container>
      <Content contentContainerStyle={[Common.backgroundLayout]}>
        <Button title={'Default Button'} onPress={onLogin} />
        <Button title={'Custom Style'} onPress={onLogin} style={{width: 80}} />
        <Button
          title={'Outline'}
          onPress={() => _changeTheme({darkMode: null})}
          type="outline"
        />
        <View style={[Layout.rowCenter, Layout.fill]}>
          <Button
            title={'Auto Flex'}
            onPress={() => _changeTheme({darkMode: true})}
          />
          <Button
            title={'Auto Flex'}
            onPress={() => _changeTheme({darkMode: false})}
            type="outline"
          />
        </View>
        <View style={[Layout.rowCenter, Layout.fill]}>
          <Button title={'History'} icon={'history'} />
          <Button
            title={'Close'}
            type="outline"
            icon={'close'}
            iconPosition="right"
            iconSize={10}
          />
        </View>
        <View style={[Layout.alignItemsStart, Layout.row]}>
          <UpDownVote />
          <Button type="iconOnly" icon={'close'} />
          <Button
            type="iconOnly"
            icon={'close-filled'}
            noBorder
            iconSize={25}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigateAndReset(['ForgotPassword', 'RegisterScreen'], 1);
          }}>
          <Text style={Fonts.textRegular}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={[Layout.row, Gutters.largeTMargin]}>
          <Profile
            type="avatar"
            avatar="AVATARV2_3"
            status="offline"
            containerStyle={Gutters.regularHMargin}
          />
          <Profile
            type="avatar"
            avatar="AVATARV2_4"
            status="online"
            containerStyle={Gutters.regularRMargin}
          />
          <Profile
            type="avatar"
            avatar="AVATARV2_5"
            removable
            onClose={onClose}
            onChangeClose={onChangeClose}
          />
          <Profile
            type="image"
            image={require('@Assets/Images/seeds.png')}
            containerStyle={Gutters.regularHMargin}
            outlineColor={Colors.baseT}
          />
          <Profile type="icon" iconName="history" outlineWidth={3} />
        </View>
      </Content>
    </Container>
  );

  function onLogin() {
    _setIsLogin(!currentStatus);
  }
};

const mapStateToProps = ({auth, theme}) => ({
  currentStatus: auth.isLogin,
});

const mapDispatchToProps = dispatch => ({
  _changeTheme: payload => dispatch(changeTheme(payload)),
  _setIsLogin: payload => dispatch(setIsLogin(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
